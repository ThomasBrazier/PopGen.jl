(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{143:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return n?i.a.createElement(d,l(l({ref:t},p),{},{components:n})):i.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},145:function(e,t,n){"use strict";var a=n(0),i=n(146);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},146:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},147:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(145),o=n(144),l=n(51),c=n.n(l),p=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.children,s=e.defaultValue,u=e.values,m=e.groupId,d=e.className,O=Object(r.a)(),f=O.tabGroupChoices,j=O.setTabGroupChoices,g=Object(a.useState)(s),h=g[0],N=g[1];if(null!=m){var v=f[m];null!=v&&v!==h&&u.some((function(e){return e.value===v}))&&N(v)}var w=function(e){N(e),null!=m&&j(m,e)},y=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(l.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},l.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},148:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),i=n(7),r=(n(0),n(143)),o=n(147),l=n(148),c={id:"genepop",title:"Genepop format",sidebar_label:"Genepop format"},p={unversionedId:"io/genepop",id:"io/genepop",isDocsHomePage:!1,title:"Genepop format",description:"Import a genepop file as PopData",source:"@site/docs/io/genepop.md",slug:"/io/genepop",permalink:"/PopGen.jl/docs/io/genepop",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/io/genepop.md",version:"current",lastUpdatedAt:1605726478,sidebar_label:"Genepop format",sidebar:"docs",previous:{title:"Delimited format",permalink:"/PopGen.jl/docs/io/delimited"},next:{title:"Structure format",permalink:"/PopGen.jl/docs/io/structure"}},b=[{value:"Import a genepop file as <code>PopData</code>",id:"import-a-genepop-file-as-popdata",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Keyword Arguments",id:"keyword-arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Format",id:"format",children:[]}]},{value:"Writing to a Genepop file",id:"writing-to-a-genepop-file",children:[{value:"Arguments",id:"arguments-1",children:[]},{value:"Keyword arguments",id:"keyword-arguments-1",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"Acknowledgements",id:"acknowledgements",children:[]}],s={rightToc:b};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"import-a-genepop-file-as-popdata"},"Import a genepop file as ",Object(r.b)("inlineCode",{parentName:"h2"},"PopData")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"genepop(infile; kwargs...)\n")),Object(r.b)("h3",{id:"arguments"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"infile::String")," : path to genepop file, in quotes")),Object(r.b)("h3",{id:"keyword-arguments"},"Keyword Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"digits::Integer"),": number of digits denoting each allele (default: ",Object(r.b)("inlineCode",{parentName:"li"},"3"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"popsep::String")," : word that separates populations in ",Object(r.b)("inlineCode",{parentName:"li"},"infile"),' (default: "POP")'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"diploid::Bool"),"  : whether samples are diploid for parsing optimizations (default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"silent::Bool"),"   : whether to print file information during import (default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),")")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"population names")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"By default, the file reader will assign numbers as population ID's (as Strings) in order of appearance in the genepop file. Use the ",Object(r.b)("inlineCode",{parentName:"p"},"populations!")," function to rename these with your own population ID's."))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'julia> wasp_data = genepop("/data/wasp_hive.gen", digits = 3, popsep = "POP")\n')),Object(r.b)("h3",{id:"format"},"Format"),Object(r.b)("p",null,"Files must follow standard Genepop formatting:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"First line is a comment (and skipped)"),Object(r.b)("li",{parentName:"ul"},"Loci are listed after first line as one-per-line without commas or in single comma-separated row"),Object(r.b)("li",{parentName:"ul"},"A line with a particular and consistent keyword must delimit populations"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Must")," be the same word each time and not a unique population name"),Object(r.b)("li",{parentName:"ul"},"File is ",Object(r.b)("strong",{parentName:"li"},"tab")," delimited or ",Object(r.b)("strong",{parentName:"li"},"space")," delimited, but not both")),Object(r.b)(o.a,{block:!0,defaultValue:"v",values:[{label:"genepop w/loci stacked vertically",value:"v"},{label:"genepop w/loci stacked horizontally",value:"h"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"v",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Wasp populations in New York\nLocus1\nLocus2\nLocus3\nPOP\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\nPOP\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n"))),Object(r.b)(l.a,{value:"h",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Wasp populations in New York\nLocus1,Locus2,Locus3\nPOP\nOneida_01,  250230  564568  110100\nOneida_02,  252238  568558  100120\nOneida_03,  254230  564558  090100\nPOP\nNewcomb_01, 254230  564558  080100\nNewcomb_02, 000230  564558  090080\nNewcomb_03, 254230  000000  090100\nNewcomb_04, 254230  564000  090120\n")))),Object(r.b)("h2",{id:"writing-to-a-genepop-file"},"Writing to a Genepop file"),Object(r.b)("p",null,"All file writing options can be performed using ",Object(r.b)("inlineCode",{parentName:"p"},"write_to()"),", which calls ",Object(r.b)("inlineCode",{parentName:"p"},"popdata2genpop")," when writing to a Genepop file."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'popdata2genepop(data::PopData; filename::String = "output.gen", digits::Int = 3, format::String = "vertical", miss::Int = 0)\n')),Object(r.b)("p",null,"Writes a ",Object(r.b)("inlineCode",{parentName:"p"},"PopData")," object to a Genepop-formatted file."),Object(r.b)("h3",{id:"arguments-1"},"Arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"data"),": the ",Object(r.b)("inlineCode",{parentName:"li"},"PopData")," object you wish to convert to a Genepop file")),Object(r.b)("h3",{id:"keyword-arguments-1"},"Keyword arguments"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filename"),": a ",Object(r.b)("inlineCode",{parentName:"li"},"String")," of the output filename"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"digits")," : an ",Object(r.b)("inlineCode",{parentName:"li"},"Integer")," indicating how many digits to format each allele",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"(1, 2)")," => ",Object(r.b)("inlineCode",{parentName:"li"},"001002")," for ",Object(r.b)("inlineCode",{parentName:"li"},"digits = 3")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"format")," : a ",Object(r.b)("inlineCode",{parentName:"li"},"String")," indicating whether loci should be formatted ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"vertically (",Object(r.b)("inlineCode",{parentName:"li"},'"v"')," or ",Object(r.b)("inlineCode",{parentName:"li"},'"vertical"'),")"),Object(r.b)("li",{parentName:"ul"},"hortizontally (",Object(r.b)("inlineCode",{parentName:"li"},'"h"'),", or ",Object(r.b)("inlineCode",{parentName:"li"},'"horizontal"'),")"),Object(r.b)("li",{parentName:"ul"},"Genepop Isolation-By-Distance (",Object(r.b)("inlineCode",{parentName:"li"},'"ibd"'),") where each sample is a population with long/lat data prepended"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"miss")," : an ",Object(r.b)("inlineCode",{parentName:"li"},"Integer")," for how you would like missing values written ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"0")," : As a genotype represented as a number of zeroes equal to ",Object(r.b)("inlineCode",{parentName:"li"},"digits \xd7 ploidy")," like ",Object(r.b)("inlineCode",{parentName:"li"},"000000")," (default) "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-9")," : As a single value ",Object(r.b)("inlineCode",{parentName:"li"},"-9"))))),Object(r.b)("h3",{id:"example-1"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'cats = @nancycats;\nfewer_cats = omit(cats, names = samples(cats)[1:10]);\njulia> popdata2genepop(fewer_cats, filename = "filtered_nancycats.gen", digits = 3, format = "h")\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"acknowledgements"},"Acknowledgements"),Object(r.b)("p",null,"The original implementations of the importing parser were written using only Base Julia, and while the speed was fantastic, the memory footprint involved seemed unusually high (~650mb RAM to parse ",Object(r.b)("inlineCode",{parentName:"p"},"gulfsharks"),", which is only 3.2mb in size). However, thanks to the efforts of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/JuliaData/CSV.jl"}),"CSV.jl"),", we leverage that package to preserve the speed and reduce the memory footprint quite a bit!"))}u.isMDXComponent=!0}}]);