(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{144:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return f}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),p=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=p(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(s,".").concat(u)]||m[u]||b[u]||r;return t?i.a.createElement(f,o(o({ref:n},l),{},{components:t})):i.a.createElement(f,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<r;l++)s[l]=t[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},145:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},146:function(e,n,t){"use strict";var a=t(0),i=t(147);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},147:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},148:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(146),s=t(145),o=t(52),c=t.n(o),l=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.children,m=e.defaultValue,b=e.values,u=e.groupId,f=e.className,d=Object(r.a)(),g=d.tabGroupChoices,j=d.setTabGroupChoices,O=Object(a.useState)(m),_=O[0],h=O[1];if(null!=u){var N=g[u];null!=N&&N!==_&&b.some((function(e){return e.value===N}))&&h(N)}var v=function(e){h(e),null!=u&&j(u,e)},y=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},f)},b.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":_===n,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":_===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case p:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(y,e.target,e)},onFocus:function(){return v(n)},onClick:function(){v(n)}},t)}))),n?Object(a.cloneElement)(o.filter((function(e){return e.props.value===_}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}},149:function(e,n,t){"use strict";var a=t(3),i=t(0),r=t.n(i);n.a=function(e){var n=e.children,t=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:i}),n)}},151:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return s}));var a=t(21),i=t(153);function r(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var r=void 0===a?{}:a,s=r.forcePrependBaseUrl,o=void 0!==s&&s,c=r.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(o)return n+t;var p=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+p:p}(r,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},153:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}))},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),r=(t(0),t(144)),s=t(148),o=t(149),c=(t(151),{id:"breeding_crosses",title:"Simulate Breeding Crosses",sidebar_label:"Breeding Crosses"}),l={unversionedId:"simulations/breeding_crosses",id:"simulations/breeding_crosses",isDocsHomePage:!1,title:"Simulate Breeding Crosses",description:"To perfom simulations, you will need add and import the package PopGenSims.jl (available here).",source:"@site/docs/simulations/breeding_crosses.md",slug:"/simulations/breeding_crosses",permalink:"/PopGen.jl/docs/simulations/breeding_crosses",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/simulations/breeding_crosses.md",version:"current",lastUpdatedAt:1605726478,sidebar_label:"Breeding Crosses",sidebar:"docs",previous:{title:"Simulating Samples",permalink:"/PopGen.jl/docs/simulations/simulate_samples"},next:{title:"Simulate Sibling Pairs",permalink:"/PopGen.jl/docs/simulations/sibship_simulations"}},p=[{value:"Perform a cross",id:"perform-a-cross",children:[]},{value:"Perform a cross/backcross",id:"perform-a-crossbackcross",children:[]},{value:"Merge results",id:"merge-results",children:[]}],m={rightToc:p};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Requires PopGenSims.jl")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To perfom simulations, you will need add and import the package ",Object(r.b)("inlineCode",{parentName:"p"},"PopGenSims.jl")," (available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pdimens/PopGenSims.jl"}),"here"),")."))),Object(r.b)("p",null,"If you need to simulate offspring genotypes given mating between two individuals, the ",Object(r.b)("inlineCode",{parentName:"p"},"cross()")," functions are available to simulate crosses and backcrosses."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Currently, ",Object(r.b)("inlineCode",{parentName:"strong"},"PopGenSims.jl")," can create crosses for:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"haploids (ploidy = 1)"),Object(r.b)("li",{parentName:"ul"},"diploids (ploidy = 2)"),Object(r.b)("li",{parentName:"ul"},"tetraploids (ploidy = 4)"),Object(r.b)("li",{parentName:"ul"},"hexaploids (ploidy = 6)"),Object(r.b)("li",{parentName:"ul"},"octaploids (ploidy = 8)")),Object(r.b)("h2",{id:"perform-a-cross"},"Perform a cross"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"cross(::PopData, parent1::String, parent2::String; n::Int, generation::String)\n")),Object(r.b)("p",null,"The cross function performs a simple parental cross from individuals ",Object(r.b)("inlineCode",{parentName:"p"},"parent1")," and ",Object(r.b)("inlineCode",{parentName:"p"},"parent2")," in the same PopData object. The parents are strings of the names of the parents in the PopData. The keyword argument ",Object(r.b)("inlineCode",{parentName:"p"},"n")," is the number of offspring to produce, and ",Object(r.b)("inlineCode",{parentName:"p"},"generation")," is a keyword argument for the population name to the assign the offspring (default: ",Object(r.b)("inlineCode",{parentName:"p"},'"F1"'),")."),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> cats = @nancycats;\n\njulia> f1 = cross(cats, "N111", "N107", n = 100000)\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 100000\n  Loci: 9\n  Populations: 1\n  Longitude: absent\n  Latitude: absent\n')),Object(r.b)("p",null,"Here is a look at the resulting ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")),Object(r.b)(s.a,{block:!0,defaultValue:"meta",values:[{label:"meta",value:"meta"},{label:"loci",value:"loci"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"meta",mdxType:"TabItem"},Object(r.b)("p",null,"There are two things that should jump out at you:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The ",Object(r.b)("inlineCode",{parentName:"li"},"name")," of offspring are prepended with ",Object(r.b)("inlineCode",{parentName:"li"},"generation")," and the ",Object(r.b)("inlineCode",{parentName:"li"},"population")," is the ",Object(r.b)("inlineCode",{parentName:"li"},"generation"),"."),Object(r.b)("li",{parentName:"ol"},"There is a never-before-seen ",Object(r.b)("inlineCode",{parentName:"li"},"parents")," column. This column exists for better record keeping of who has what parents if you are performing multiple crosses.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'julia> f1.meta\n100000\xd76 DataFrame\n\u2502 Row    \u2502 name                \u2502 ploidy \u2502 population \u2502 latitude \u2502 longitude \u2502 parents          \u2502\n\u2502        \u2502 String              \u2502 Int64  \u2502 String     \u2502 Float32? \u2502 Float32?  \u2502 Tuple\u2026           \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1      \u2502 F1_offspring_1      \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 2      \u2502 F1_offspring_2      \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 3      \u2502 F1_offspring_3      \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 4      \u2502 F1_offspring_4      \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 5      \u2502 F1_offspring_5      \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u22ee\n\u2502 99995  \u2502 F1_offspring_99995  \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 99996  \u2502 F1_offspring_99996  \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 99997  \u2502 F1_offspring_99997  \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 99998  \u2502 F1_offspring_99998  \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 99999  \u2502 F1_offspring_99999  \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n\u2502 100000 \u2502 F1_offspring_100000 \u2502 2      \u2502 F1         \u2502 missing  \u2502 missing   \u2502 ("N111", "N107") \u2502\n'))),Object(r.b)(o.a,{value:"loci",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"julia> f1.loci\n900000\xd74 DataFrame\n\u2502 Row    \u2502 name                \u2502 population \u2502 locus  \u2502 genotype   \u2502\n\u2502        \u2502 String              \u2502 String     \u2502 String \u2502 Tuple\u2026?    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1      \u2502 F1_offspring_1      \u2502 F1         \u2502 fca8   \u2502 (135, 135) \u2502\n\u2502 2      \u2502 F1_offspring_1      \u2502 F1         \u2502 fca23  \u2502 (146, 132) \u2502\n\u2502 3      \u2502 F1_offspring_1      \u2502 F1         \u2502 fca43  \u2502 (139, 145) \u2502\n\u2502 4      \u2502 F1_offspring_1      \u2502 F1         \u2502 fca45  \u2502 (132, 122) \u2502\n\u2502 5      \u2502 F1_offspring_1      \u2502 F1         \u2502 fca77  \u2502 (158, 150) \u2502\n\u22ee\n\u2502 899995 \u2502 F1_offspring_100000 \u2502 F1         \u2502 fca45  \u2502 (122, 128) \u2502\n\u2502 899996 \u2502 F1_offspring_100000 \u2502 F1         \u2502 fca77  \u2502 (158, 150) \u2502\n\u2502 899997 \u2502 F1_offspring_100000 \u2502 F1         \u2502 fca78  \u2502 (142, 150) \u2502\n\u2502 899998 \u2502 F1_offspring_100000 \u2502 F1         \u2502 fca90  \u2502 (201, 199) \u2502\n\u2502 899999 \u2502 F1_offspring_100000 \u2502 F1         \u2502 fca96  \u2502 (113, 103) \u2502\n\u2502 900000 \u2502 F1_offspring_100000 \u2502 F1         \u2502 fca37  \u2502 (214, 208) \u2502\n")))),Object(r.b)("h2",{id:"perform-a-crossbackcross"},"Perform a cross/backcross"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'cross(PopData => "Parent1Name", PopData => "Parent2Name", n::Int, generation::String)\n')),Object(r.b)("p",null,"This syntax uses the ",Object(r.b)("inlineCode",{parentName:"p"},"Pair")," notation of ",Object(r.b)("inlineCode",{parentName:"p"},'PopData => "Parent"')," to specify inputs. This method can be used for performing a cross like above, with the flexibility of parents allowed from two different ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," objects, which makes backcrosses possible. The keyword argument ",Object(r.b)("inlineCode",{parentName:"p"},"n")," is the number of offspring to produce, and ",Object(r.b)("inlineCode",{parentName:"p"},"generation")," is a keyword argument for the population name to the assign the offspring (default: ",Object(r.b)("inlineCode",{parentName:"p"},'"F1"'),")."),Object(r.b)("h4",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> f2_backcross = cross(cats => "N111", f1 => "F1_offspring_99", n = 100000, generation = "F2_manycats")\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 100000\n  Loci: 9\n  Populations: 1\n  Longitude: absent\n  Latitude: absent\n')),Object(r.b)("p",null,"And here you can see that ",Object(r.b)("inlineCode",{parentName:"p"},"generation")," was again prepended to each offspring ",Object(r.b)("inlineCode",{parentName:"p"},"name"),", along with assigned to the ",Object(r.b)("inlineCode",{parentName:"p"},"population")," for each."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'julia> f2_backcross.meta\n100000\xd76 DataFrame\n\u2502 Row    \u2502 name                         \u2502 ploidy \u2502 population  \u2502 latitude \u2502 longitude \u2502 parents                     \u2502\n\u2502        \u2502 String                       \u2502 Int64  \u2502 String      \u2502 Float32? \u2502 Float32?  \u2502 Tuple{String,String}        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1      \u2502 F2_manycats_offspring_1      \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 2      \u2502 F2_manycats_offspring_2      \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 3      \u2502 F2_manycats_offspring_3      \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 4      \u2502 F2_manycats_offspring_4      \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 5      \u2502 F2_manycats_offspring_5      \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u22ee\n\u2502 99995  \u2502 F2_manycats_offspring_99995  \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 99996  \u2502 F2_manycats_offspring_99996  \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 99997  \u2502 F2_manycats_offspring_99997  \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 99998  \u2502 F2_manycats_offspring_99998  \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 99999  \u2502 F2_manycats_offspring_99999  \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n\u2502 100000 \u2502 F2_manycats_offspring_100000 \u2502 2      \u2502 F2_manycats \u2502 missing  \u2502 missing   \u2502 ("N111", "F1_offspring_99") \u2502\n')),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When crossing parents from different ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),", the parents must have the same loci. You will see error messages if they don't."))),Object(r.b)("h2",{id:"merge-results"},"Merge results"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," generated from breeding crosses can be combined used ",Object(r.b)("inlineCode",{parentName:"p"},"append")," or ",Object(r.b)("inlineCode",{parentName:"p"},"append!")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"append(::PopData, ::PopData)\nappend!(::PopData, ::PopData)\n")),Object(r.b)("p",null,"These methods use outer joins and the ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," you are combining must have the same loci."),Object(r.b)("h4",{id:"example-2"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"# non mutating\ncrossed_sims = append(f1, f2_backcross)\n\n# mutating\nappend!(f1, f2_backcross)\n")))}b.isMDXComponent=!0}}]);