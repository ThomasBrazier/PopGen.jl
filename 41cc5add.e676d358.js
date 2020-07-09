(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{153:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return c}));var a=t(2),i=t(9),r=(t(0),t(204)),o={id:"ioutils",title:"ioUtils.jl",sidebar_label:"ioUtils.jl"},l={id:"api/ioutils",isDocsHomePage:!1,title:"ioUtils.jl",description:"determine_marker",source:"@site/docs/api/ioUtils.md",permalink:"/PopGen.jl/docs/api/ioutils",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/api/ioUtils.md",lastUpdatedAt:1594327400,sidebar_label:"ioUtils.jl",sidebar:"docs",previous:{title:"Heterozygosity.jl",permalink:"/PopGen.jl/docs/api/heterozygosity"},next:{title:"Manipulate.jl",permalink:"/PopGen.jl/docs/api/manipulate"}},p=[{value:"<code>determine_marker</code>",id:"determine_marker",children:[]},{value:"<code>find_ploidy</code>",id:"find_ploidy",children:[]},{value:"<code>phase</code>",id:"phase",children:[]},{value:"<code>unphase</code>",id:"unphase",children:[]}],s={rightToc:p};function c(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"determine_marker"},Object(r.b)("inlineCode",{parentName:"h3"},"determine_marker")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"determine_marker(geno_parse::T, digits::Int) where T<:AbstractDataFrame\n")),Object(r.b)("p",null,"Return either ",Object(r.b)("inlineCode",{parentName:"p"},"Int8")," or ",Object(r.b)("inlineCode",{parentName:"p"},"Int16")," depending on largest allelic\nvalue in all genotypes in the first 10 samples of an input\nDataFrame (or all the samples if less than 10 samples).\nIf the largest allele is 11 or greater, the marker will be\nconsidered a Microsatellite and coded in ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," as ",Object(r.b)("inlineCode",{parentName:"p"},"Int16"),",\nand the opposite is true for SNPs. There's no specific reason\n10 was chosen other than it being a reasonable buffer for edge\ncases since SNP data <= 4, and haplotyped data could be a bit\nhigher. Even if the microsatellite markers are coded\nincorrectly, there will be zero impact to performance,\nand considering how few microsatellite markers are used in\ntypical studies, the effect on in-memory size should be\nnegligible (as compared to SNPs)."),Object(r.b)("h3",{id:"find_ploidy"},Object(r.b)("inlineCode",{parentName:"h3"},"find_ploidy")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"find_ploidy(genotypes::T where T<:SubArray)\n")),Object(r.b)("p",null,"Used internally in the ",Object(r.b)("inlineCode",{parentName:"p"},"genepop")," and ",Object(r.b)("inlineCode",{parentName:"p"},"delimited")," file parsers to scan the genotypes of a sample and return the ploidy of the first non-missing locus."),Object(r.b)("h3",{id:"phase"},Object(r.b)("inlineCode",{parentName:"h3"},"phase")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"phase(loc::Union{String, Int}, type::DataType, digit::Int)\n")),Object(r.b)("p",null,"Takes a String of numbers or Integer and returns a typed locus\nappropriate for PopGen.jl as used in the ",Object(r.b)("inlineCode",{parentName:"p"},"genepop")," and ",Object(r.b)("inlineCode",{parentName:"p"},"csv"),"\nfile parsers. Use ",Object(r.b)("inlineCode",{parentName:"p"},"type")," to specify output type (",Object(r.b)("inlineCode",{parentName:"p"},"Int8")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"Int16"),"), and ",Object(r.b)("inlineCode",{parentName:"p"},"digit")," to specify the number of digits/\ncharacters used per allele in a locus."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'ph_locus = phase("128114", Int16, 3)\nmap(i -> phase(i, Int16, 3), ["112131", "211112", "001003", "516500"])\n# or #\n[phase(i, Int8, 2) for i in ["0101", "0103", "0202", "0103"]]\n')),Object(r.b)("h3",{id:"unphase"},Object(r.b)("inlineCode",{parentName:"h3"},"unphase")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"unphase(geno::T; digits::Int = 3, ploidy::Int = 2, miss::Int = 0) where T <: Genotype\nunphase(geno::missing; digits::Int = 3, ploidy::Int = 2, miss::Int = 0) \n")),Object(r.b)("p",null,"Takes a ",Object(r.b)("inlineCode",{parentName:"p"},"Genotype")," (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"(131, 94)"),") and returns a string of concatenated\nalleles padded with ",Object(r.b)("em",{parentName:"p"},"n")," number of zeroes, where ",Object(r.b)("em",{parentName:"p"},"n")," is given by ",Object(r.b)("inlineCode",{parentName:"p"},"digits = "),"."),Object(r.b)("h4",{id:"miss"},"miss"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"miss = 0"),": ",Object(r.b)("inlineCode",{parentName:"li"},"missing")," values are returned as a string of ",Object(r.b)("inlineCode",{parentName:"li"},"digits \xd7 ploidy")," zeroes (default)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"miss = -9")," : ",Object(r.b)("inlineCode",{parentName:"li"},"missing")," values are returned as ",Object(r.b)("inlineCode",{parentName:"li"},"-9"),"\nThe ",Object(r.b)("inlineCode",{parentName:"li"},"ploidy")," flag is only relevant for unphasing ",Object(r.b)("inlineCode",{parentName:"li"},"missing")," genotypes\nand not used otherwise.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Example")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'unphase((1,2,3,4), digits = 3)\n"001002003004"\n\nunphase(missing, digits = 2, ploidy = 2, miss = -9)\n"-9"\n\nunphase(missing, digits = 2, ploidy = 2, miss = 0)\n"0000"\n')))}c.isMDXComponent=!0},204:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),c=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||r;return t?i.a.createElement(m,l(l({ref:n},s),{},{components:t})):i.a.createElement(m,l({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);