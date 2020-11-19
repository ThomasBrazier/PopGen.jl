(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(7),o=(n(0),n(143)),i=n(147),c=n(148),l={id:"quickstart",title:"Quick Start",sidebar_label:"Quick Start"},u={unversionedId:"getting_started/quickstart",id:"getting_started/quickstart",isDocsHomePage:!1,title:"Quick Start",description:"1. Install PopGen",source:"@site/docs/getting_started/quickstart.md",slug:"/getting_started/quickstart",permalink:"/PopGen.jl/docs/getting_started/quickstart",editUrl:"https://github.com/pdimens/popgen.jl/edit/documentation/docs/getting_started/quickstart.md",version:"current",lastUpdatedAt:1605803981,sidebar_label:"Quick Start"},s=[{value:"1. Install PopGen",id:"1-install-popgen",children:[]},{value:"2. Invoke the package",id:"2-invoke-the-package",children:[]},{value:"3. Start playing around",id:"3-start-playing-around",children:[]}],p={rightToc:s};function d(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-install-popgen"},"1. Install PopGen"),Object(o.b)(i.a,{block:!0,defaultValue:"repl",values:[{label:"REPL/Juno",value:"repl"},{label:"Jupyter/nteract",value:"jupyter"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"repl",mdxType:"TabItem"},Object(o.b)("p",null,"Invoke the package manager with ",Object(o.b)("inlineCode",{parentName:"p"},"]")," in the REPL and use"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"add PopGen\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"install",src:n(178).default}))),Object(o.b)(c.a,{value:"jupyter",mdxType:"TabItem"},Object(o.b)("p",null,"Invoke ",Object(o.b)("inlineCode",{parentName:"p"},"using Pkg")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),'using Pkg\nPkg.add("PopGen")\n')),Object(o.b)("p",null,Object(o.b)("img",{alt:"install",src:n(179).default})))),Object(o.b)("h2",{id:"2-invoke-the-package"},"2. Invoke the package"),Object(o.b)("p",null,"Simply run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-julia"}),"julia> using PopGen\n")),Object(o.b)("h2",{id:"3-start-playing-around"},"3. Start playing around"),Object(o.b)("p",null,"To help get started, you can either call ",Object(o.b)("inlineCode",{parentName:"p"},"?PopGen")," or ",Object(o.b)("inlineCode",{parentName:"p"},"PopGen.quickstart()")," and be greeted with some information to help you get started:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'julia> PopGen.quickstart()\n\n        Quickstart for PopGen\n\nDocumentation: https://pdimens.github.io/PopGen.jl/\nMotivational(?) quote: "I am so clever that sometimes I don\u2019t understand a single word of what I am saying." Oscar Wilde\n\nA few things things you can do to get started:\n\nLoad in data\n\n- read_from(filename; kwargs...)\n- genepop(infile; kwargs...)  or similar file-specific importer\n- use available @gulfsharks or @nancycats datasets\n\nExplore PopData\n\n- populations(PopData) to view population information\n- loci(PopData) to view locus names\n- samples(PopData) to view sample names\n- missing(PopData, by = ...) to view missing information\n\nManipulate PopData\n\n- populations!(PopData, ...) to rename populations\n- locations!(PopData, ...) to add geographical coordinates\n- exclude!(PopData, kwargs...) to selectively remove data\n\nAnalyses\n\n- richness(PopData) to calculate allelic richness\n- allele_avg(PopData) to calculate average # of alleles\n- summary(PopData) to calculate F-statistics, heterozygosity, etc.\n- hwe_test(PopData) to test for Hardy-Weinberg Equilibrium\n')))}d.isMDXComponent=!0},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=a,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},144:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},145:function(e,t,n){"use strict";var a=n(0),r=n(146);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},146:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},147:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(145),i=n(144),c=n(51),l=n.n(c),u=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.children,p=e.defaultValue,d=e.values,b=e.groupId,f=e.className,m=Object(o.a)(),g=m.tabGroupChoices,v=m.setTabGroupChoices,O=Object(a.useState)(p),y=O[0],j=O[1];if(null!=b){var h=g[b];null!=h&&h!==y&&d.some((function(e){return e.value===h}))&&j(h)}var k=function(e){j(e),null!=b&&v(b,e)},P=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},f)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return k(t)},onClick:function(){k(t)}},n)}))),t?Object(a.cloneElement)(c.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},c.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},148:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},178:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_repl-d6dc918e24043afff66846542927cecc.gif"},179:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/install_jupyter-b2d669963d67e5c5d9d0c960ad39a528.gif"}}]);