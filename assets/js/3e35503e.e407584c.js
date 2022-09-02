"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[6668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,b=d["".concat(u,".").concat(y)]||d[y]||c[y]||i;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"3 Data Type",author:"thurendous, Polymetis",date:"August 15, 2022",keywords:["solidity","data","type"],description:"data type of solidity",tags:["basic","datatype"]},o="\u57fa\u672c\u7684\u306a\u5909\u6570\u306e\u578b",l={unversionedId:"Learning/dataType",id:"Learning/dataType",title:"3 Data Type",description:"data type of solidity",source:"@site/docs/Learning/3_dataType.md",sourceDirName:"Learning",slug:"/Learning/dataType",permalink:"/docs/Learning/dataType",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/3_dataType.md",tags:[{label:"basic",permalink:"/docs/tags/basic"},{label:"datatype",permalink:"/docs/tags/datatype"}],version:"current",sidebarPosition:3,frontMatter:{title:"3 Data Type",author:"thurendous, Polymetis",date:"August 15, 2022",keywords:["solidity","data","type"],description:"data type of solidity",tags:["basic","datatype"]},sidebar:"tutorialSidebar",previous:{title:"2 An Easy App",permalink:"/docs/Learning/anEasyApp"},next:{title:"4 Variables",permalink:"/docs/Learning/variables"}},u={},p=[],s={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u57fa\u672c\u7684\u306a\u5909\u6570\u306e\u578b"},"\u57fa\u672c\u7684\u306a\u5909\u6570\u306e\u578b"),(0,a.kt)("p",null,"Solidiy \u306b\u3042\u308b\u57fa\u672c\u7684\u306a\u5909\u6570\u306e\u578b\u306b\u3064\u3044\u3066\u7d39\u4ecb"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"bool"),(0,a.kt)("li",{parentName:"ul"},"uint"),(0,a.kt)("li",{parentName:"ul"},"int"),(0,a.kt)("li",{parentName:"ul"},"address")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Primitives {\n    // bool\u5024\u3092\u5ba3\u8a00\u3057\u3001\u521d\u671f\u5024true\u3092\u4ed8\u4e0e\n    bool public boo = true;\n\n    /*\n    uint\u306f\u7b26\u53f7\u306a\u3057\u306e\u6570\uff08\u6b63\u306e\u6574\u6570\u53ca\u30730\uff09\u3092\u610f\u5473\u3059\u308b\u3002\n\n    \u5024\u306e\u7bc4\u56f2\uff1a\n        uint8: 0 ~ 2 ^ 8 - 1\n        uint16: 0 ~ 2 ^ 16 - 1\n        ...\n        uint256: 0 ~ 2 ^ 256 - 1\n    */\n\n    uint8 public u8 = 12;\n    uint public u = 1234; // uint\u306e\u5f8c\u308d\u306b\u4f55\u3082\u66f8\u304b\u306a\u3044\u306e\u306fuint256\u3068\u540c\u3058\n    uint public u256 = 156;\n\n    /*\n    int\u578b\u306f\u8ca0\u306e\u5024\u306e\u4ed8\u4e0e\u3082ok\n    uint\u3068\u540c\u3058\u3088\u3046\u306b\u3001int8 ~ int256\u307e\u3067\u304c\u3042\u308b\n\n    \u5024\u306e\u7bc4\u56f2\uff1a\n    int256: -2 ^ 255 ~ 2 ^ 255 - 1\n    int128: -2 ^ 127 ~ 2 ^ 127 - 1\n    */\n    int8 public i8 = -1;\n    int public i256 = 456;\n    int public i = -123; // int\u306e\u5f8c\u308d\u306b\u4f55\u3082\u66f8\u304b\u306a\u3044\u306e\u306fint256\u3068\u540c\u3058\n\n    // \u6700\u5927\u5024\u3001\u6700\u5c0f\u5024\u306e\u66f8\u304d\u65b9\n    int public minInt = type(int).min; // -2 ^ 255\n    int public maxInt = type(int).max; // 2 ^ 255 - 1\n\n    address public addr = 0xCA35b7d915458EF540aDe6068dFe2F44E8fa733c;\n\n    /*\n    \u5909\u6570\u578b\u306ebyte\u306f\u3001\u30d0\u30a4\u30c8\u306e\u30b7\u30fc\u30b1\u30f3\u30b9\u3092\u610f\u5473\u3059\u308b\u3002\n    solidity\u306b\u306f2\u7a2e\u985e\u306e\u30d0\u30a4\u30c8\u306e\u5909\u6570\u578b\u304c\u3042\u308b\u3002\n    - \u56fa\u5b9a\u9577\u306e\u30d0\u30a4\u30c8\u306e\u914d\u5217: bytes1\u306a\u3069\n    - \u53ef\u5909\u9577\u306e\u30d0\u30a4\u30c8\u306e\u914d\u5217: bytes or byte[]\n    */\n    bytes1 a = 0xb5; //  [10110101]\n    bytes1 b = 0x56; //  [01010110]\n\n    // \u521d\u671f\u5024\n    // \u521d\u671f\u5024\u3092\u4ed8\u4e0e\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3067\u3082\u521d\u671f\u5024\u306f\u3042\u308b\n    bool public defaultBoo; // \u521d\u671f\u5024\u306ffalse\n    uint public defaultUint; // 0\n    int public defaultInt; // 0\n    address public defaultAddr; // 0x0000000000000000000000000000000000000000\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}c.isMDXComponent=!0}}]);