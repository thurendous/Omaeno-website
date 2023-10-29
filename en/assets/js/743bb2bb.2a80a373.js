"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[4678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,y=p["".concat(c,".").concat(m)]||p[m]||l[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"40 ABI decode",author:"thurendous, Polymetis",date:"October 30th, 2022",keywords:["solidity","abidecode"],description:"understand abidecode through solidity code example",tags:["solidity","abidecode"]},i=void 0,d={unversionedId:"Learning/ABIdecode",id:"Learning/ABIdecode",title:"40 ABI decode",description:"understand abidecode through solidity code example",source:"@site/docs/Learning/40_ABIdecode.md",sourceDirName:"Learning",slug:"/Learning/ABIdecode",permalink:"/en/docs/Learning/ABIdecode",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/40_ABIdecode.md",tags:[{label:"solidity",permalink:"/en/docs/tags/solidity"},{label:"abidecode",permalink:"/en/docs/tags/abidecode"}],version:"current",sidebarPosition:40,frontMatter:{title:"40 ABI decode",author:"thurendous, Polymetis",date:"October 30th, 2022",keywords:["solidity","abidecode"],description:"understand abidecode through solidity code example",tags:["solidity","abidecode"]},sidebar:"tutorialSidebar",previous:{title:"39 ABI encode",permalink:"/en/docs/Learning/ABIencode"},next:{title:"41 Hashing With Keccak256",permalink:"/en/docs/Learning/HashingWIthKeccak256"}},c={},s=[],u={toc:s};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"decode \u306f bytes \u3092 data \u3078\u5909\u63db\u3059\u308b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract AbiDecode {\n    struct MyStruct {\n        string name;\n        uint[2] nums;\n    }\n\n    // example of arguments:\n    // 1\n    // 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4\n    // [1,2]\n    // ["x", [1,2]]\n    function encode(\n        uint x,\n        address addr,\n        uint[] calldata arr,\n        MyStruct calldata myStruct\n    ) external pure returns (bytes memory) {\n        return abi.encode(x, addr, arr, myStruct);\n    }\n\n    // example arguments\u3092\u4f7f\u3063\u3066\u751f\u6210\u3057\u305fdata\u3092\u5165\u529b\u3057\u305f\u5834\u5408\u3001\u305d\u306earguments\u3092\u8fd4\u3059\n    function decode(bytes calldata data)\n        external\n        pure\n        returns (\n            uint x,\n            address addr,\n            uint[] memory arr,\n            MyStruct memory myStruct\n        )\n    {\n        // (uint x, address addr, uint[] memory arr, MyStruct myStruct) = ...\n        (x, addr, arr, myStruct) = abi.decode(data, (uint, address, uint[], MyStruct));\n    }\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}l.isMDXComponent=!0}}]);