"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[4855],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=r.createContext({}),s=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?r.createElement(g,p(p({ref:n},l),{},{components:t})):r.createElement(g,p({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,p=new Array(i);p[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=t[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={title:"12 Mapping",author:"MarkWu, Polymetis",date:"August 27, 2022",keywords:["solidity","mapping"],description:"solidity mapping",tags:["basic","mapping"]},p="Mapping",o={unversionedId:"Learning/Mapping",id:"Learning/Mapping",title:"12 Mapping",description:"solidity mapping",source:"@site/docs/Learning/12_Mapping.md",sourceDirName:"Learning",slug:"/Learning/Mapping",permalink:"/en/docs/Learning/Mapping",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/12_Mapping.md",tags:[{label:"basic",permalink:"/en/docs/tags/basic"},{label:"mapping",permalink:"/en/docs/tags/mapping"}],version:"current",sidebarPosition:12,frontMatter:{title:"12 Mapping",author:"MarkWu, Polymetis",date:"August 27, 2022",keywords:["solidity","mapping"],description:"solidity mapping",tags:["basic","mapping"]},sidebar:"tutorialSidebar",previous:{title:"11 for and while loop",permalink:"/en/docs/Learning/forWhileLoop"},next:{title:"13 Array",permalink:"/en/docs/Learning/array"}},d={},s=[],l={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mapping"},"Mapping"),(0,a.kt)("p",null,"Mapping \u306f\u30a4\u30c6\u30ec\u30fc\u30c8\u3067\u304d\u307e\u305b\u3093\u3002\u8981\u3059\u308b\u306b\u30eb\u30fc\u30d7\u3067\u53d6\u308a\u51fa\u3059\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002\n\u66f8\u304d\u65b9\u306f\u3053\u3061\u3089\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"mapping(keyType => valueType)"),"\u3002\nkeyType \u306f\u901a\u5e38",(0,a.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"uint"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bytes"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"contract")," etc\nvalueType \u306f",(0,a.kt)("inlineCode",{parentName:"p"},"mapping"),"\u3084",(0,a.kt)("inlineCode",{parentName:"p"},"array"),"\u3092\u542b\u3080\u5168\u3066\u306e\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Mapping {\n    // address\u304b\u3089uint\u3078\u3068\u3044\u3046\u30de\u30c3\u30d4\u30f3\u30b0->ERC20 token\u306e\u30d0\u30e9\u30f3\u30b9\u306f\u3053\u3093\u306a\u611f\u3058\n    mapping(address => uint) public balanceOf;\n\n    function get(address _addr) public view returns (uint) {\n        // mapping\u306f\u7d76\u5bfe\u306b\u306a\u3093\u3089\u304b\u306e\u5024\u3092\u8fd4\u3057\u3066\u304f\u308c\u308b\n        // \u3082\u3057\u767b\u9332\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u521d\u671f\u5024\u306e\u5024\u3092\u8fd4\u3059\n        return balanceOf[_addr];\n    }\n\n    function set(address _addr, uint _i) public {\n        // mapping\u3078\u306e\u66f8\u304d\u8fbc\u307f\u304c\u3067\u304d\u308b\u95a2\u6570\n        balanceOf[_addr] = _i;\n    }\n\n    function remove(address _addr) public {\n        // \u767b\u9332\u3055\u308c\u3066\u3044\u308b\u5024\u3092\u524a\u9664\u3057\u3001\u521d\u671f\u5024\u306b\u623b\u3059\u95a2\u6570\n        delete myMap[_addr];\n    }\n}\n\ncontract NestedMapping {\n    // \u30cd\u30b9\u30c8\u3055\u308c\u305fmapping\u306e\u3053\u3068\u3067\u3001\u4e8c\u91cd\u306emapping\n    mapping(address => mapping(uint => bool)) public nestedMap;\n\n    function get(address _addr1, uint _i) public view returns (bool) {\n        // You can get values from a nested mapping\n        // even when it is not initialized\n        return nestedMap[_addr1][_i];\n    }\n\n    function set(\n        address _addr1,\n        uint _i,\n        bool _boo\n    ) public {\n        nestedMap[_addr1][_i] = _boo;\n    }\n\n    function remove(address _addr1, uint _i) public {\n        delete nestedMap[_addr1][_i];\n    }\n}\n\n")),(0,a.kt)("admonition",{title:"\u30b3\u30e9\u30e0",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u72b6\u614b\uff08World State\uff09\u3092\u6539\u5909\u3059\u308b\u306b\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u767a\u884c\u3059\u308b\u3057\u304b\u3042\u308a\u307e\u305b\u3093\u3002\n\u95a2\u6570\u3092\u5b9f\u884c\u3059\u308b\u306b\u5f53\u305f\u3063\u3066\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u767a\u884c\u3057\u3066\u3044\u307e\u3059\u3002\n\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u306f\u7d04 14 \u79d2\u306b 1 \u56de\u65b0\u3057\u3044\u30d6\u30ed\u30c3\u30af\u304c\u751f\u6210\u3055\u308c\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3092\u5f62\u6210\u3057\u3066\u3044\u307e\u3059\u3002\n1 \u3064\u306e\u30d6\u30ed\u30c3\u30af\u306f\u591a\u304f\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\n\u6b21\u306e\u53c2\u7167\u30b5\u30a4\u30c8\u3067\u30d3\u30b8\u30e5\u30a2\u30eb\u306b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u898b\u308b\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n",(0,a.kt)("a",{parentName:"p",href:"https://txstreet.com/v/eth-btc"},"\u53c2\u7167\u30b5\u30a4\u30c8"),"\n\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3068\u306f\u3053\u306e\u3088\u3046\u306b\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4f55\u304b\u3057\u3089\u306e\u64cd\u4f5c\u3092\u52a0\u3048\u308b\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u79c1\u306f\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u304c\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u3068\u3044\u3046\u30bf\u30a4\u30d7\u306e\u3082\u306e\u304c\u8907\u6570\u3042\u308b\u3068\u601d\u3063\u3066\u3044\u307e\u3057\u305f\u304c\u3001\n\u5b9f\u969b\u306f 1 \u672c\u3067\u3042\u308a\u3001")),(0,a.kt)("admonition",{title:"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u305f\u3068\u3048\u8a71",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306f\u5404\u6751\u4eba\u304c\u3069\u308c\u304f\u3089\u3044\u304a\u91d1\u3092\u6301\u3063\u3066\u3044\u308b\u304b\uff08World State\uff09\u3092\u8a18\u9332\u3059\u308b\u77f3\u7891\u3067\u5404\u6751\u4eba\u304c\u4e00\u4eba\u305a\u3064\u6301\u3063\u3066\u3044\u3066\u5e38\u6642\u540c\u671f\u3055\u308c\u308b\u3088\u3046\u306a\u3082\u306e\u3067\u3059\u3002\u305d\u306e\u77f3\u7891\u306b\u3042\u308b\u66f8\u304d\u8fbc\u307f\u5185\u5bb9\u306f\u6751\u4eba\u5168\u54e1\u306e\u30b3\u30f3\u30bb\u30f3\u30b5\u30b9\u306b\u3088\u3063\u3066\u7ba1\u7406\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u3063\u3066\u3001\u3082\u306e\u3059\u3054\u3044\u5197\u9577\u6027\uff08\u8ab0\u304b\u304c\u77f3\u7891\u3092\u306a\u304f\u3057\u3066\u3082\u5e73\u6c17\u3060\u3068\u3044\u3046\u3053\u3068\uff09\u304c\u62c5\u4fdd\u3055\u308c\u3066\u305a\u308b\u304c\u3067\u304d\u306a\u3044\u3088\u3046\u306a\u4ed5\u7d44\u307f\u304c\u5b8c\u6210\u3055\u308c\u307e\u3059\u3002")))}c.isMDXComponent=!0}}]);