(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{143:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return d}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),b=a,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||r;return t?i.a.createElement(d,o(o({ref:n},c),{},{components:t})):i.a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},144:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},145:function(e,n,t){"use strict";var a=t(0),i=t(146);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},146:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},147:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(145),s=t(144),o=t(51),l=t.n(o),c=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.children,m=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(r.a)(),j=f.tabGroupChoices,O=f.setTabGroupChoices,g=Object(a.useState)(m),v=g[0],h=g[1];if(null!=b){var y=j[b];null!=y&&y!==v&&p.some((function(e){return e.value===y}))&&h(y)}var w=function(e){h(e),null!=b&&O(b,e)},N=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(s.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case c:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(N,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(a.cloneElement)(o.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},o.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},148:function(e,n,t){"use strict";var a=t(3),i=t(0),r=t.n(i);n.a=function(e){var n=e.children,t=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:i}),n)}},87:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),r=(t(0),t(143)),s=t(147),o=t(148),l={id:"simulate_samples",title:"Simulating Samples",sidebar_label:"Simulating Samples"},c={unversionedId:"simulations/simulate_samples",id:"simulations/simulate_samples",isDocsHomePage:!1,title:"Simulating Samples",description:"To perfom simulations, you will need add and import the package PopGenSims.jl (available here).",source:"@site/docs/simulations/simulations.md",slug:"/simulations/simulate_samples",permalink:"/PopGen.jl/docs/simulations/simulate_samples",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/simulations/simulations.md",version:"current",lastUpdatedAt:1605726478,sidebar_label:"Simulating Samples",sidebar:"docs",previous:{title:"Relatedness (Kinship)",permalink:"/PopGen.jl/docs/analyses/relatedness"},next:{title:"Simulate Breeding Crosses",permalink:"/PopGen.jl/docs/simulations/breeding_crosses"}},u=[{value:"Simulate samples within populations",id:"simulate-samples-within-populations",children:[]}],m={rightToc:u};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Requires PopGenSims.jl")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"To perfom simulations, you will need add and import the package ",Object(r.b)("inlineCode",{parentName:"p"},"PopGenSims.jl")," (available ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/pdimens/PopGenSims.jl"}),"here"),")."))),Object(r.b)("h2",{id:"simulate-samples-within-populations"},"Simulate samples within populations"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"simulate(data::PopData; n::Int = 100)\n")),Object(r.b)("p",null,"If you want to generate simulated data of a certain number of individuals per population, you can do so with the ",Object(r.b)("inlineCode",{parentName:"p"},"simulate()")," function, which takes a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object and simulates ",Object(r.b)("inlineCode",{parentName:"p"},"n")," number of individuals per population using the allele frequencies of each population. This returns\nnew ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". The simulated samples will have the naming convention ",Object(r.b)("inlineCode",{parentName:"p"},"sim_#")," where ",Object(r.b)("inlineCode",{parentName:"p"},"#")," is a number from 1:",Object(r.b)("inlineCode",{parentName:"p"},"n"),". These simulations return samples with the same ploidy as the source ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),", but will ",Object(r.b)("strong",{parentName:"p"},"not")," work on mixed-ploidy data. "),Object(r.b)("p",null,"In the example below, we simulate 100 individuals per\npopulation using the nancycats data, which has 17 populations, therefore the resulting ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," will have 1700 samples (100 samples x 17 populations)"),Object(r.b)("h4",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"cats = @nancycats;\n\njulia> sims = simulate(cats , n = 100)\nPopData Object\n  Markers: Microsatellite\n  Ploidy: 2\n  Samples: 1700\n  Loci: 9\n  Populations: 17\n  Coordinates: absent\n")),Object(r.b)("p",null,"Here is a look inside the ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," to verify everything looks as expected."),Object(r.b)(s.a,{block:!0,defaultValue:"m",values:[{label:"meta",value:"m"},{label:"loci",value:"l"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"m",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"julia> sims.meta\n  1700\xd75 DataFrame\n  \u2502 Row  \u2502 name     \u2502 population \u2502 ploidy \u2502 longitude \u2502 latitude \u2502\n  \u2502      \u2502 String   \u2502 String     \u2502 Int64  \u2502 Missing   \u2502 Missing  \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 1    \u2502 sim_1    \u2502 1          \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 2    \u2502 sim_2    \u2502 1          \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 3    \u2502 sim_3    \u2502 1          \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 4    \u2502 sim_4    \u2502 1          \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u22ee\n  \u2502 1696 \u2502 sim_1696 \u2502 17         \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 1697 \u2502 sim_1697 \u2502 17         \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 1698 \u2502 sim_1698 \u2502 17         \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 1699 \u2502 sim_1699 \u2502 17         \u2502 2      \u2502 missing   \u2502 missing  \u2502\n  \u2502 1700 \u2502 sim_1700 \u2502 17         \u2502 2      \u2502 missing   \u2502 missing  \u2502  \n"))),Object(r.b)(o.a,{value:"l",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"julia> sims.loci\n  15300\xd74 DataFrame\n  \u2502 Row   \u2502 name     \u2502 population \u2502 locus  \u2502 genotype   \u2502\n  \u2502       \u2502 String   \u2502 String     \u2502 String \u2502 Tuple\u2026?    \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 1     \u2502 sim_1    \u2502 1          \u2502 fca8   \u2502 (135, 135) \u2502\n  \u2502 2     \u2502 sim_1    \u2502 1          \u2502 fca23  \u2502 (132, 140) \u2502\n  \u2502 3     \u2502 sim_1    \u2502 1          \u2502 fca43  \u2502 (139, 139) \u2502\n  \u2502 4     \u2502 sim_1    \u2502 1          \u2502 fca45  \u2502 (126, 126) \u2502\n  \u22ee\n  \u2502 15297 \u2502 sim_1700 \u2502 17         \u2502 fca78  \u2502 (142, 142) \u2502\n  \u2502 15298 \u2502 sim_1700 \u2502 17         \u2502 fca90  \u2502 (199, 199) \u2502\n  \u2502 15299 \u2502 sim_1700 \u2502 17         \u2502 fca96  \u2502 (113, 113) \u2502\n  \u2502 15300 \u2502 sim_1700 \u2502 17         \u2502 fca37  \u2502 (208, 208) \u2502\n")))))}p.isMDXComponent=!0}}]);