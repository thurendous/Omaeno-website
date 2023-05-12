"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[5869],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var r=o(7294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,l=function(e,t){if(null==e)return{};var o,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=l,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||n;return o?r.createElement(g,a(a({ref:t},c),{},{components:o})):r.createElement(g,a({ref:t},c))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=o.length,a=new Array(n);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<n;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3064:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=o(7462),l=(o(7294),o(3905));const n={slug:"Zero-knowledge-proofs-explained-by-examples",title:"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u3092\u4e8b\u4f8b\u3067\u7406\u89e3\u3059\u308b",authors:["Thurendous","Polymetis"],blogDescription:"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u3092\u4e8b\u4f8b\u3067\u7406\u89e3\u3059\u308b",tags:["zero-knwoledge","proof","blockchain","examples"]},a=void 0,i={permalink:"/blog/Zero-knowledge-proofs-explained-by-examples",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/Zero-knowledge-proofs/2023-1-8-zero-knowledge-by-examples.md",source:"@site/blog/Zero-knowledge-proofs/2023-1-8-zero-knowledge-by-examples.md",title:"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u3092\u4e8b\u4f8b\u3067\u7406\u89e3\u3059\u308b",description:"Hi Hi, nerver give up!",date:"2023-01-08T00:00:00.000Z",formattedDate:"2023\u5e741\u67088\u65e5",tags:[{label:"zero-knwoledge",permalink:"/blog/tags/zero-knwoledge"},{label:"proof",permalink:"/blog/tags/proof"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"examples",permalink:"/blog/tags/examples"}],readingTime:1.878,hasTruncateMarker:!1,authors:[{name:"Thurendous",title:"Think borderlessly",url:"https://github.com/thurendous",imageURL:"https://github.com/thurendous.png",key:"Thurendous"},{name:"Polymetis",title:"Do your best now",url:"https://github.com/PolymetisOutis",imageURL:"https://github.com/PolymetisOutis.png",key:"Polymetis"}],frontMatter:{slug:"Zero-knowledge-proofs-explained-by-examples",title:"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u3092\u4e8b\u4f8b\u3067\u7406\u89e3\u3059\u308b",authors:["Thurendous","Polymetis"],blogDescription:"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u3092\u4e8b\u4f8b\u3067\u7406\u89e3\u3059\u308b",tags:["zero-knwoledge","proof","blockchain","examples"]},prevItem:{title:"CEI\u3068\u306f : Checks Effects Interactions",permalink:"/blog/checks-effects-interactions"},nextItem:{title:"opcode\u306b\u3064\u3044\u3066",permalink:"/blog/opcode-basics"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"\u4f8b\uff11",id:"\u4f8b\uff11",level:2},{value:"Proof1",id:"proof1",level:3},{value:"Proof2",id:"proof2",level:3},{value:"\u5065\u5168\u6027\u3001\u5b8c\u5168\u6027\u3001\u30bc\u30ed\u77e5\u8b58\u306e\u5c5e\u6027",id:"\u5065\u5168\u6027\u5b8c\u5168\u6027\u30bc\u30ed\u77e5\u8b58\u306e\u5c5e\u6027",level:3},{value:"\u4f8b 2",id:"\u4f8b-2",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Hi Hi, nerver give up!"),(0,l.kt)("p",null,"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u306f\u30b7\u30f3\u30d7\u30eb\u306b\u8a00\u3046\u3068\u4eba\u306b\u79d8\u5bc6\u3092\u30d0\u30e9\u3059\u3053\u3068\u306a\u304f\u3001\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u8a3c\u660e\u3067\u304d\u308b\u3053\u3068\u3002"),(0,l.kt)("p",null,"\u5999\u306a\u8a00\u3044\u65b9\u3092\u3057\u3066\u3044\u3066\u3001\u81ea\u5206\u3082\u306a\u304b\u306a\u304b\u3068\u3063\u3064\u304d\u306b\u304f\u3044\u3053\u3068\u3060\u3068\u601d\u3044\u307e\u3057\u305f\u3002\u4e8b\u4f8b\u3092\u901a\u3057\u3066\u7406\u89e3\u3059\u308b\u3068\u3001\u30d4\u30f3\u3068\u304f\u308b\u3053\u3068\u3082\u3042\u308b\u306e\u304b\u3082\u3057\u308c\u306a\u3044\u3002\n",(0,l.kt)("img",{src:o(6501).Z,width:"623",height:"435"})),(0,l.kt)("p",null,"\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u306f\u975e\u5e38\u306b\u91cd\u8981\u3067\u3001\u3053\u308c\u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u306e\u59a5\u5354\u3092\u3059\u308b\u3053\u3068\u306a\u304f\u3001\u306a\u306b\u304b\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3078\u30ed\u30b0\u30a4\u30f3\uff1a\u30d1\u30b9\u30ef\u30fc\u30c9\u3092\u5165\u529b\u3059\u308b\u304b\u308f\u308a\u306b\u3001\u81ea\u5206\u304c\u305d\u308c\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u8a3c\u660e\u3059\u308c\u3070\u3088\u3044"),(0,l.kt)("li",{parentName:"ul"},"\u30a2\u30a4\u30c7\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u8a8d\u8a3c\uff1a\u672c\u540d\u3092\u30d0\u30e9\u3059\u304b\u308f\u308a\u306b\u3001\u30d7\u30eb\u30fc\u30d5\u3092\u9001\u308b\u3060\u3051\u3067\u6e08\u3080"),(0,l.kt)("li",{parentName:"ul"},"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\uff1a\u304a\u91d1\u3092\u30d1\u30d6\u30ea\u30c3\u30af\u306a\u30d3\u30c3\u30c8\u30b3\u30a4\u30f3\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u4e0a\u3067\u9001\u308b\u3088\u308a\u3082\u3001\u30d7\u30eb\u30fc\u30d5\u3067\u691c\u8a3c\u3059\u308b\u3053\u3068\u3067\u6e08\u3080\u3002\u4f8b\u3048\u3070\u3001Zcash \u306f\u3053\u306e\u4ed5\u7d44\u3067\u3042\u308b\u3002")),(0,l.kt)("h2",{id:"\u4f8b\uff11"},"\u4f8b\uff11"),(0,l.kt)("p",null,"Alice and Bob \u306f\u7d75\u672c\u306b\u3044\u308b Waldo \u306e\u5834\u6240\u3092\u63a2\u3059\u306e\u306b\u7af6\u3063\u3066\u3044\u308b\u3068\u3057\u3088\u3046\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:o(2806).Z,width:"636",height:"198"})),(0,l.kt)("p",null,"Alice \u306f Waldo \u306e\u5c45\u5834\u6240\u306f\u898b\u3064\u304b\u3063\u305f\u3068\u8a00\u3044\u5f35\u3063\u3066\u3044\u308b\u3002\nAlice \u306f\u5b9f\u969b\u306e\u5c45\u5834\u6240\u3092\u30d0\u30e9\u3059\u3053\u3068\u306a\u304f\u3001\u4f1d\u3048\u305f\u304f\u3066\u8272\u3005\u8003\u3048\u305f\u3002"),(0,l.kt)("h3",{id:"proof1"},"Proof1"),(0,l.kt)("p",null,"Alice \u306f Waldo \u306e\u7834\u7247\u3092\u305d\u306e\u307e\u307e\u5207\u308a\u53d6\u3063\u3066 Bob \u306b\u898b\u305b\u308b\u3002Bob \u306f Alice \u306e\u5207\u308a\u53d6\u3063\u305f\u7834\u7247\u3001\u3042\u308b\u3044\u306f\u5207\u308a\u53d6\u3063\u305f\u5f8c\u306e\u7d75\u672c\u3092\u53c2\u8003\u306b\u7b54\u3048\u3092\u63a2\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:o(7228).Z,width:"647",height:"216"})),(0,l.kt)("h3",{id:"proof2"},"Proof2"),(0,l.kt)("p",null,"Alice \u306f\u5225\u306e\u7d19\u3092\u7d75\u672c\u306b\u304b\u3076\u305b\u3066\u3001Bob \u306b Waldo \u3060\u3051\u7a74\u3092\u958b\u3051\u3066\u3092\u898b\u305b\u308b\u3068\u3057\u3088\u3046\u3002\u3053\u306e\u5834\u5408\u3001Waldo \u304c\u5468\u308a\u306e\u6b63\u78ba\u306a\u98a8\u666f\u306b\u3044\u308b\u304b\u306f\u4e0d\u660e\u3067\u3001Alice \u306f\u305d\u306e\u98a8\u666f\u3092\u6b63\u3057\u304f\u8a3c\u660e\u3067\u304d\u308c\u3070\u8a3c\u660e\u3067\u304d\u308b\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:o(3124).Z,width:"554",height:"190"})),(0,l.kt)("h3",{id:"\u5065\u5168\u6027\u5b8c\u5168\u6027\u30bc\u30ed\u77e5\u8b58\u306e\u5c5e\u6027"},"\u5065\u5168\u6027\u3001\u5b8c\u5168\u6027\u3001\u30bc\u30ed\u77e5\u8b58\u306e\u5c5e\u6027"),(0,l.kt)("p",null,"\u3053\u306e\u4e8c\u7a2e\u985e\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u306f\u30bc\u30ed\u77e5\u8b58\u8a3c\u660e\u306e\uff13\u3064\u306e\u5c5e\u6027\u3067\u3042\u308b\u5065\u5168\u6027\u3001\u5b8c\u5168\u6027\u3001\u30bc\u30ed\u77e5\u8b58\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3068\u8a00\u3048\u3088\u3046\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5065\u5168\u6027\uff1a\u8a3c\u660e\u3067\u304d\u305f\u3089\u3001\u672c\u5f53\u306b\u306a\u308b\u3002Alice \u304c\u3082\u3057 Waldo \u306e\u5c45\u5834\u6240\u3092\u63a2\u305b\u306a\u304b\u3063\u305f\u3089\u3001\u30e9\u30f3\u30c0\u30e0\u306a\u30d4\u30fc\u30b9\u306b\u306a\u3063\u305f\u306b\u9055\u3044\u306a\u304f\u3001\u3059\u3050\u306b\u898b\u3064\u304b\u3063\u3066\u3044\u306a\u3044\u3068\u3070\u308c\u308b\u3060\u308d\u3046\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u5b8c\u5168\u6027\uff1a\u8a3c\u660e\u3067\u304d\u305f\u5834\u5408\u306f\u5fc5\u305a\u30d7\u30eb\u30fc\u30d5\u304c\u3042\u308b\u3002Waldo \u3092\u63a2\u305b\u305f\u5834\u5408\u3001\u5fc5\u305a Waldo \u3092\u898b\u305b\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u30bc\u30ed\u77e5\u8b58\uff1a\u8a3c\u660e\u3055\u308c\u305f\u3053\u3068\u304c\u898b\u305b\u3089\u308c\u3066\u3044\u3066\u3001\u4e8b\u5b9f\u305d\u306e\u3082\u306e\u306f\u898b\u305b\u3066\u3044\u306a\u3044\u3002\u552f\u4e00\u898b\u305b\u305f\u4e8b\u5b9f\u306f Waldo \u306f\u898b\u3064\u304b\u3063\u305f\u3088\u3068\u3044\u3046\u3053\u3068\u3060\u3051\u3067\u3001\u3069\u306e\u5834\u6240\u306b\u3044\u308b\u304b\u3068\u304b\u306e\u60c5\u5831\u306f\u958b\u793a\u3057\u3066\u3044\u306a\u3044\u3002")),(0,l.kt)("h2",{id:"\u4f8b-2"},"\u4f8b 2"),(0,l.kt)("p",null,"\u3082\u3046\u4e00\u3064\u4f8b\u3092\u898b\u3066\u307f\u3088\u3046\u3002Alice \u306f\u8272\u76f2\u3067\u3001Bob \u306f\u305d\u3046\u3067\u306f\u306a\u3044\u3002\u3067\u3082 Alice \u306f Bob \u304c\u81ea\u5206\u306f\u8272\u76f2\u3067\u306a\u3044\u3053\u3068\u3092\u4fe1\u7528\u3067\u304d\u3066\u304a\u3089\u305a\u3001Bob \u306b\u8a3c\u660e\u3057\u3066\u307b\u3057\u3044\u3068\u601d\u3063\u3066\u3044\u308b\u3002"),(0,l.kt)("p",null,"\u305d\u3053\u3067\u6697\u53f7\u5c02\u9580\u5bb6\u306e\u5f7c\u5973\u306f\u3046\u307e\u304f\u8003\u3048\u3066\u5b9f\u9a13\u3092\u3057\u3060\u3057\u305f\u3002"),(0,l.kt)("p",null,"Alice \u306f\u9752\u3044\u30dc\u30fc\u30eb\u3068\u30ec\u30c3\u30c9\u306e\u30dc\u30fc\u30eb\u3092\u6301\u3063\u3066\u3044\u3066\u3001\u4f53\u306e\u5f8c\u308d\u306b\u3082\u3063\u3066\u3044\u304d\u3001\u30b7\u30e3\u30c3\u30d5\u30eb\u3057\u3066\u304b\u3089 Bob \u306b\u898b\u305b\u3064\u3064\u3001\u30dc\u30fc\u30eb\u304c\u5165\u3063\u3066\u3044\u308b\u624b\u304c\u5909\u308f\u3063\u305f\u306e\u304b\u306b\u3064\u3044\u3066\u5c0b\u306d\u308b\u3002\n\u3053\u308c\u3092 20 \u56de\u304f\u3089\u3044\u7e70\u308a\u8fd4\u3059\u3053\u3068\u3067\u3001\u3082\u3057 Bob \u304c\u5168\u90e8\u6b63\u89e3\u3057\u3066\u3044\u305f\u3089\u3001\u305f\u307e\u305f\u307e Bob \u304c\u8272\u76f2\u3067\u3042\u308a\u3064\u3064\u3001\u6b63\u89e3\u3067\u304d\u305f\u78ba\u7387\u306f 1/1048576 \u304f\u3089\u3044\u3067\u7121\u8996\u3067\u304d\u308b\u306e\u3067\u3001\u307b\u307c\u4fe1\u983c\u306b\u5024\u3059\u308b\u3060\u308d\u3046\u3068 Alice \u306f\u8003\u3048\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:o(3428).Z,width:"466",height:"169"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"THE END")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://medium.com/good-audience/understanding-zero-knowledge-proofs-through-simple-examples-df673f796d99"},"0xSage \u3055\u3093\u306e\u8a18\u4e8b"),"\u3092\u53c2\u8003\u306b\u629c\u7c8b\u30fb\u7ffb\u8a33\u3057\u305f\u308a\u3057\u3066\u3044\u308b\u3002"))}u.isMDXComponent=!0},3428:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/AliceBobHandColor-b2af0213b6103f67abe17ccc34733cf4.png"},7228:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/alicecutehon-22c855e3f1d53240552991cd822c19dc.png"},3124:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/alicecutimage-b7966fe4ec4ad8793a3efe601527bb19.png"},2806:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/findthisguy-4db4762abe33acf50b4586877152e5a5.png"},6501:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/urnotauthorizedtoknow-7d3794142305dd6a1cd82409a6edfaf9.png"}}]);