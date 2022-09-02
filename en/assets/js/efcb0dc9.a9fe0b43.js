"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[1918],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),p=n,y=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4537:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"15 Storage, Memory and Calldata",author:"thurendous, Polymetis",date:"August 28, 2022",keywords:["solidity","storage","memory","calldata"],description:"solidity storage, memory and calldata",tags:["basic","storage, memory, calldata"]},i="Storage, Memory and Calldata",l={unversionedId:"Learning/Storage, Memory and calldata",id:"Learning/Storage, Memory and calldata",title:"15 Storage, Memory and Calldata",description:"solidity storage, memory and calldata",source:"@site/docs/Learning/15_Storage, Memory and calldata.md",sourceDirName:"Learning",slug:"/Learning/Storage, Memory and calldata",permalink:"/en/docs/Learning/Storage, Memory and calldata",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/15_Storage, Memory and calldata.md",tags:[{label:"basic",permalink:"/en/docs/tags/basic"},{label:"storage, memory, calldata",permalink:"/en/docs/tags/storage-memory-calldata"}],version:"current",sidebarPosition:15,frontMatter:{title:"15 Storage, Memory and Calldata",author:"thurendous, Polymetis",date:"August 28, 2022",keywords:["solidity","storage","memory","calldata"],description:"solidity storage, memory and calldata",tags:["basic","storage, memory, calldata"]},sidebar:"tutorialSidebar",previous:{title:"14 Struct",permalink:"/en/docs/Learning/Struct"},next:{title:"15 Function",permalink:"/en/docs/Learning/Function"}},c={},s=[],u={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"storage-memory-and-calldata"},"Storage, Memory and Calldata"),(0,n.kt)("p",null,"\u3053\u308c\u306f\u4ed6\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u8a00\u8a9e\u306b\u306a\u3044\u77e5\u8b58\u3002\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306e\u5834\u5408\u306f\u30ac\u30b9\u4ee3\u304c\u304b\u304b\u308b\u306e\u3067\u3001",(0,n.kt)("inlineCode",{parentName:"p"},"storage"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"memory"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"calldata"),"\u306e\u4f7f\u3044\u5206\u3051\u304c\u91cd\u8981\u306b\u306a\u308b\u3002"),(0,n.kt)("p",null,"\u5909\u6570\u306e\u5834\u5408\u3001\u5ba3\u8a00\u3059\u308b\u3068\u304d\u306b\u3053\u306e\uff13\u7a2e\u985e\u306e\u30ef\u30fc\u30c9\u3092\u66f8\u304f\u3053\u3068\u3067\u660e\u77ad\u306b\u30c7\u30fc\u30bf\u306e\u5834\u6240\u3092\u5b9a\u7fa9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"storage: \u72b6\u614b\u5909\u6570\u3068\u3057\u3066\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3001\u7de8\u96c6\u53ef\u80fd"),(0,n.kt)("li",{parentName:"ul"},"memory: \u95a2\u6570\u306e\u4e2d\u306b\u5b58\u5728\u3059\u308b\u30e1\u30e2\u30ea\u306b\u4fdd\u5b58\u3055\u308c\u308b\u4e00\u6642\u7684\u306a\u5909\u6570\u3001\u7de8\u96c6\u53ef\u80fd"),(0,n.kt)("li",{parentName:"ul"},"calldata: memory \u3068\u4f3c\u3066\u3044\u3066\u30e1\u30e2\u30ea\u306b\u4e00\u6642\u7684\u306b\u4fdd\u5b58\u3055\u308c\u308b\u3002\u4ee3\u5165\u3059\u308b\u95a2\u6570\u306e\u5f15\u6570\u306b\u306a\u308b\u3002\u7de8\u96c6\u4e0d\u53ef")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sol"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract DataLocations {\n    uint[] public arr;\n    mapping(uint => address) map;\n    struct MyStruct {\n        uint foo;\n    }\n    mapping(uint => MyStruct) myStructs; // NFT\u3067\u3067\u305d\u3046\u306a\u69cb\u9020\n\n    function f() public {\n\n        // mapping\u304b\u3089struct\u3092\u72b6\u614b\u5909\u6570\u3078\u4ee3\u5165\n        MyStruct storage myStruct = myStructs[1];\n        // memory\u3067struct\u3092\u521d\u671f\u5316\u3059\u308b\n        MyStruct memory myMemStruct = MyStruct(0);\n    }\n\n    // \u5f15\u6570\u306bstorage\u3082\u5165\u308c\u308c\u308b\n    function _f(\n        uint[] storage _arr,\n        mapping(uint => address) storage _map,\n        MyStruct storage _myStruct\n    ) internal {\n        // do something with storage variables\n    }\n\n    // \u30e1\u30e2\u30ea\u306e\u5909\u6570\u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u308b\n    function g(uint[] memory _arr) public returns (uint[] memory) {\n         // do something with storage variables\n    }\n\n    // calldata\u306e\u5f15\u6570\u304c\u53ef\u80fd\n    function h(uint[] calldata _arr) external {\n    }\n}\n\n\n")))}m.isMDXComponent=!0}}]);