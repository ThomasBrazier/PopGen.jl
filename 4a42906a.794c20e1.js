(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(204)),i={id:"manipulate",title:"Start here",sidebar_label:"Start here"},c={id:"basics/manipulate",isDocsHomePage:!1,title:"Start here",description:"PopGen.jl includes basic commands to provide obvious methods to inspect and alter PopData. Using standard Julia conventions, only commands ending with a bang ! are mutable, meaning they alter the input data. So, commands like populations will show you population information, whereas populations! will change that information in your PopData. The mutable commands here alter the data in your PopData, but not the source data (i.e. the files used to create the PopData). Read over Accessing parts of PopData to become familiar with the components of PopData.",source:"@site/docs/basics/manipulate.md",permalink:"/PopGen.jl/docs/basics/manipulate",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/basics/manipulate.md",lastUpdatedAt:1594327400,sidebar_label:"Start here",sidebar:"docs",previous:{title:"Variant Call Format",permalink:"/PopGen.jl/docs/io/vcf"},next:{title:"Accessing elements",permalink:"/PopGen.jl/docs/basics/accessing"}},l=[{value:"Accessing Elements",id:"accessing-elements",children:[]},{value:"Viewing and Sorting",id:"viewing-and-sorting",children:[]},{value:"Sample and Locus Exclusion/Removal",id:"sample-and-locus-exclusionremoval",children:[]},{value:"Location and Population Information",id:"location-and-population-information",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"PopGen.jl includes basic commands to provide obvious methods to inspect and alter ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". Using standard Julia conventions, only commands ending with a bang ",Object(r.b)("inlineCode",{parentName:"p"},"!")," are mutable, meaning they alter the input data. So, commands like ",Object(r.b)("inlineCode",{parentName:"p"},"populations")," will show you population information, whereas ",Object(r.b)("inlineCode",{parentName:"p"},"populations!")," will change that information in your ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". The mutable commands here alter the data in your ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),", but not the source data (i.e. the files used to create the ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),"). Read over ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"accessing"}),"Accessing parts of PopData")," to become familiar with the components of ",Object(r.b)("inlineCode",{parentName:"p"},"PopData"),". "),Object(r.b)("p",null,'The "manipulation" commands were separated into three sections to make it less overwhelming, and using the ',Object(r.b)("inlineCode",{parentName:"p"},"gulfsharks")," data, you can explore each of the sections like a little tutorial. The sections don't follow any particular order, so feel free to jump around however you like. "),Object(r.b)("p",null,"To follow along like a tutorial, load the ",Object(r.b)("inlineCode",{parentName:"p"},"gulfsharks")," data in if you haven't already:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"julia> using PopGen\n\njulia> sharks = gulfsharks() ;\n")),Object(r.b)("h3",{id:"accessing-elements"},Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"accessing"}),"Accessing Elements")),Object(r.b)("h3",{id:"viewing-and-sorting"},Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"viewsort"}),"Viewing and Sorting")),Object(r.b)("h3",{id:"sample-and-locus-exclusionremoval"},Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"exclusion"}),"Sample and Locus Exclusion/Removal")),Object(r.b)("h3",{id:"location-and-population-information"},Object(r.b)("a",Object(a.a)({parentName:"h3"},{href:"populations"}),"Location and Population Information")))}p.isMDXComponent=!0},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);