#### Simple code versions ####
"""
    qg_relatedness(data::PopObj, ind1::String, ind2::String; alleles::Dict)
Calculates the moments based estimator of pairwise relatedness developed by Queller & Goodnight (1989).
- Bases allele frequencies on entire population
- Inbreeding can only be assumed not to exist.
See equation 3 in: https://www.nature.com/articles/hdy201752 for variant of estimator used
"""
function qg_relatedness(data::PopData, ind1::String, ind2::String; alleles::T) where T <: NamedTuple

    #TODO NEED TO CHECK TO CONFIRM EQUATIONS

    n1 = 0.0
    n2 = 0.0
    d1 = 0.0
    d2 = 0.0

    for loc in loci(data)
        #Extract the pair of interest's genotypes
        gen1 = get_genotype(data, sample = ind1, locus = loc)
        gen2 = get_genotype(data, sample = ind2, locus = loc)

        #Skip missing
        if gen1 !== missing && gen2 !== missing
            a,b = gen1
            c,d = gen2
            sym_loc = Symbol(loc)

            n1 += ((a == c) + (a == d) + (b == c) + (b == d)) - 2 * (alleles[sym_loc][a] + alleles[sym_loc][b])
            n2 += ((a == c) + (a == d) + (b == c) + (b == d)) - 2 * (alleles[sym_loc][c] + alleles[sym_loc][d])

            d1 += (2 * (1 + (a==b) - alleles[sym_loc][a] - alleles[sym_loc][b]))
            d2 += (2 * (1 + (c==d) - alleles[sym_loc][c] - alleles[sym_loc][d]))
        end
    end
    return (n1/d1 + n2/d2)/2.0
end

"""
    ritland_relatedness(data::PopObj, ind1::String, ind2::String; alleles::Dict)
Calculates the moments based estimator of pairwise relatedness proposed by Li and Horvitz (1953) and implemented/made popular by Ritland (1996).
- Bases allele frequencies on entire population
- Inbreeding can only be assumed not to exist.
See equation 7 in: https://www.nature.com/articles/hdy201752 for variant of estimator used
Ritland original citation: https://www.cambridge.org/core/journals/genetics-research/article/estimators-for-pairwise-relatedness-and-individual-inbreeding-coefficients/9AE218BF6BF09CCCE18121AA63561CF7
"""
function ritland_relatedness(data::PopData, ind1::String, ind2::String; alleles::T) where T <: NamedTuple

    #TODO NEED TO CHECK TO CONFIRM EQUATIONS

    n = 0.0
    d = 0.0
    for loc in loci(data)
        #Extract the pair of interest's genotypes
        gen1 = get_genotype(data, sample = ind1, locus = loc)
        gen2 = get_genotype(data, sample = ind2, locus = loc)

        #Skip missing
        if gen1 !== missing && gen2 !== missing
            a,b = gen1
            c,d = gen2
            sym_loc = Symbol(loc)

            A = ((alleles[sym_loc] |> length) - 1)

            R = 0.0
            for i in keys(alleles[sym_loc])
                R += ((((a == i) + (b == i)) * ((c == i) + (d == i))) / (4 * alleles[sym_loc][i])) #Individual locus relatedness value (eq 7 in paper)
            end
            R = (2 / A) * (R - 1)

            n += (R * A) #numerator for weighted combination of loci
            d += A #denominator for weighted combination of loci
        end
    end
    return (n / d)
end

"""
    lr_relatedness(data::PopObj, ind1::String, ind2::String; alleles::Dict)
Calculates the moments based estimator of pairwise relatedness by Ritland (1996).
- Bases allele frequencies on entire population
- Inbreeding can only be assumed not to exist.
See equation 10 in: https://www.nature.com/articles/hdy201752 for variant of estimator used
Ritland original citation: https://www.cambridge.org/core/journals/genetics-research/article/estimators-for-pairwise-relatedness-and-individual-inbreeding-coefficients/9AE218BF6BF09CCCE18121AA63561CF7
"""
function lr_relatedness(data::PopData, ind1::String, ind2::String; alleles::T) where T <: NamedTuple
    #TODO NEED TO CHECK TO CONFIRM EQUATIONS

    n = 0.0
    d = 0.0
    for loc in loci(data)
        #Extract the pair of interest's genotypes
        gen1 = get_genotype(data, sample = ind1, locus = loc)
        gen2 = get_genotype(data, sample = ind2, locus = loc)

        #Skip missings
        if gen1 !== missing && gen2 !== missing
            a,b = gen1
            c,d = gen2
            sym_loc = Symbol(loc)

            n1 = alleles[sym_loc][a] * ((b == c) + (b == d)) + alleles[sym_loc][b] * ((a == c) + (a == d)) - 4 * alleles[sym_loc][a] * alleles[sym_loc][b]
            n2 = alleles[sym_loc][c] * ((d == a) + (d == b)) + alleles[sym_loc][d] * ((c == a) + (c == b)) - 4 * alleles[sym_loc][c] * alleles[sym_loc][d]

            d1 = 2 * (1 + (a == b)) * (alleles[sym_loc][a] + alleles[sym_loc][b]) - 8 * alleles[sym_loc][a] * alleles[sym_loc][b]
            d2 = 2 * (1 + (c == d)) * (alleles[sym_loc][c] + alleles[sym_loc][d]) - 8 * alleles[sym_loc][c] * alleles[sym_loc][d]

            RL = (n1 / d1) + (n2 / d2)

            n += RL #JDS - CHECK THIS IS CORRECT
            d += ((alleles[sym_loc] |> length) - 1)
        end
    end
    return (n / d)
end

"""
    ll_relatedness(data::PopObj, ind1::String, ind2::String; alleles::Dict)
Calculates the moments based estimator of pairwise relatedness by Lynch (1988) & improved by Li et al. (1993).
See equations 13 - 16 in: https://www.nature.com/articles/hdy201752 for variant of estimator used
"""
function ll_relatedness(data::PopData, ind1::String, ind2::String; alleles::T) where T <: NamedTuple
    #TODO NEED TO CHECK TO CONFIRM EQUATIONS

    n = 0.0
    d = 0.0
    for loc in loci(data)
        #Extract the pair of interest's genotypes
        gen1 = get_genotype(data, sample = ind1, locus = loc)
        gen2 = get_genotype(data, sample = ind2, locus = loc)

        #Skip missing
        if gen1 !== missing && gen2 !== missing
            a,b = gen1
            c,d = gen2
            sym_loc = Symbol(loc)

            Sxy = (1/2) * (((a == c) + (a == d) + (b == c) + (b == d)) / (2 * (1 + (a == b))) + ((a == c) + (a == d) + (b == c) + (b == d)) / (2 * (1 + (c == d))))
            S0 = 2 * sum(values(alleles[sym_loc]) .^ 2) - sum(values(alleles[sym_loc]) .^ 3)

            n += Sxy - S0
            d += 1 - S0

        end
    end
    return (n / d)
end

"""
    loiselle_relatedness(data::PopObj, ind1::String, ind2::String; alleles::Dict)
Calculates the moments based estimator of pairwise relatedness using the estimator propsed by Loiselle et al (1995) and modified to individual dyads by Heuertz et al. (2003).
See equations 22 in: https://www.nature.com/articles/hdy201752 for variant of estimator used
"""
function loiselle_relatedness(data::PopData, ind1::String, ind2::String; alleles::T) where T <: NamedTuple
    #TODO NEED TO CHECK TO CONFIRM EQUATIONS

    n = 0.0
    d = 0.0
    for loc in loci(data)
        #Extract the pair of interest's genotypes
        gen1 = get_genotype(data, sample = ind1, locus = loc)
        gen2 = get_genotype(data, sample = ind2, locus = loc)

        #Skip missing
        if gen1 !== missing && gen2 !== missing
            a,b = gen1
            c,d = gen2
            sym_loc = Symbol(loc)

            for allele in keys(alleles[sym_loc])

                n += ((sum(gen1 .== allele) / 2) - alleles[sym_loc][allele]) * ((sum(gen2 .== allele) / 2) - alleles[sym_loc][allele])
                d += alleles[sym_loc][allele] * (1 - alleles[sym_loc][allele])

            end
        end
    end
    return (2 * n / d) + 2 / (2 * length(samples(data)) - 1)
end



#### Rework for efficiency ####

function QuellerGoodnight(loc::Symbol, geno1::Genotype, geno2::Genotype, alleles::T) where T <: NamedTuple
    a,b = geno1
    c,d = geno2

    n1 = sum((a == c, a == d, b == c, b == d)) - 2.0 * (alleles[loc][a] + alleles[loc][b])
    n2 = sum((a == c, a == d, b == c, b == d)) - 2.0 * (alleles[loc][c] + alleles[loc][d])

    d1 = 2.0 * (1.0 + (a==b) - alleles[loc][a] - alleles[loc][b])
    d2 = 2.0 * (1.0 + (c==d) - alleles[loc][c] - alleles[loc][d])
    return (n1, d1, n2, d2)
end

function Ritland(loc::Symbol, geno1::Genotype, geno2::Genotype, alleles::T) where T <: NamedTuple
    a,b = geno1
    c,d = geno2

    A = ((alleles[loc] |> length) - 1)

    R = 0.0
    for allele in keys(alleles[loc])
        # Individual locus relatedness value (eq 7 in paper)
        R += ((((a == allele) + (b == allele)) * ((c == allele) + (d == allele))) / (4.0 * alleles[loc][allele]))
    end
    R = (2 / A) * (R - 1.0)
    # return numerator,denominator
    return ((R * A), A, 0.0, 0.0)
end

function LynchRitland(loc::Symbol, geno1::Genotype, geno2::Genotype, alleles::T) where T <: NamedTuple
    a,b = geno1
    c,d = geno2
    A = ((alleles[loc] |> length) - 1)

    n1 = alleles[loc][a] * ((b == c) + (b == d)) + alleles[loc][b] * ((a == c) + (a == d)) - 4.0 * alleles[loc][a] * alleles[loc][b]
    n2 = alleles[loc][c] * ((d == a) + (d == b)) + alleles[loc][d] * ((c == a) + (c == b)) - 4.0 * alleles[loc][c] * alleles[loc][d]

    d1 = 2.0 * (1.0 + (a == b)) * (alleles[loc][a] + alleles[loc][b]) - 8.0 * alleles[loc][a] * alleles[loc][b]
    d2 = 2.0 * (1.0 + (c == d)) * (alleles[loc][c] + alleles[loc][d]) - 8.0 * alleles[loc][c] * alleles[loc][d]

    RL = (n1 / d1) + (n2 / d2)
    # return numerator, denominator
    return (RL, A, 0.0, 0.0)
end

"""
    relatedness_moment(data::PopObj, ind1::String, ind2::String; alleles::Dict)
Calculates the moments based estimator of pairwise relatedness by Ritland (1996).
- Bases allele frequencies on entire population
- Inbreeding can only be assumed not to exist.
See equation 10 in: https://www.nature.com/articles/hdy201752 for variant of estimator used
Ritland original citation: https://www.cambridge.org/core/journals/genetics-research/article/estimators-for-pairwise-relatedness-and-individual-inbreeding-coefficients/9AE218BF6BF09CCCE18121AA63561CF7
"""
function relatedness_moment(data::PopData, ind1::String, ind2::String; alleles::T, method::Vector{Function}) where T <: NamedTuple
    #NEED TO CHECK TO CONFIRM EQUATIONS
    #Extract the pair of interest's genotypes
    gen1 = get_genotypes(data, ind1)
    gen2 = get_genotypes(data, ind2)

    d = Dict{Symbol,Vector{Float64}}()

    for (loc,geno1,geno2) in zip(skipmissings(Symbol.(loci(data)), gen1, gen2)...)
        for mthd in method
            nu, denm, nu2, denm2 = mthd(loc, geno1, geno2, alleles)
            get!(d, Symbol(mthd), zeros(4))[1] += nu
            get!(d, Symbol(mthd), zeros(4))[2] += denm
            get!(d, Symbol(mthd), zeros(4))[3] += nu2
            get!(d, Symbol(mthd), zeros(4))[4] += denm2
        end
    end
    if haskey(d, :QuellerGoodnight)
        qg = d[:QuellerGoodnight]
        d[:QuellerGoodnight][1] = (qg[1]/qg[2]) + (qg[3]/qg[4])
        d[:QuellerGoodnight][2] = 2.0
    end
    return NamedTuple{Tuple(keys(d))}(getindex.(values(d), 1) ./ getindex.(values(d), 2))
end


#TODO this is 100% incomplete
function pairwise_relatedness(data::PopData; method::String = "qg", inbreeding::Bool = true, verbose::Bool = true)
    # check that dataset is entirely diploid
    all(data.meta.ploidy .== 2) == false && error("Relatedness analyses currently only support diploid samples")

    allele_frequencies = NamedTuple{Tuple(Symbol.(loci(data)))}(
                            Tuple(allele_freq.(locus.(Ref(data), loci(data))))
                        )
    sample_names = samples(data)
    sample_pairs = [tuple(sample_names[i], sample_names[j]) for i in 1:length(sample_names)-1 for j in i+1:length(sample_names)]
    relate_vec = zeros(length(sample_pairs))
    idx = 0
    @inbounds for (sample_n, ind1) in enumerate(sample_names[1:end-1])
        @inbounds Base.Threads.@threads for ind2 in sample_names[sample_n+1:end]
            idx += 1
            relate_vec[idx] += qg_relatedness(data, ind1, ind2, alleles = allele_frequencies)

        end
    end
    method_colname = Symbol("relatedness_" * method)
    return DataFrame(:sample_1 => getindex.(sample_pairs, 1), :sample_2 => getindex.(sample_pairs, 2), method_colname => relate_vec)
end