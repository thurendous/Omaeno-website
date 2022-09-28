"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[2111],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"8 Gas",author:"thurendous, Polymetis",date:"August 15, 2022",keywords:["solidity","gas price","gas"],description:"gas and gas price of Ethereum",tags:["basic","gas"]},s="\u30ac\u30b9\u4ee3",o={unversionedId:"Learning/gasAndGasprice",id:"Learning/gasAndGasprice",title:"8 Gas",description:"gas and gas price of Ethereum",source:"@site/docs/Learning/8_gasAndGasprice.md",sourceDirName:"Learning",slug:"/Learning/gasAndGasprice",permalink:"/docs/Learning/gasAndGasprice",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/8_gasAndGasprice.md",tags:[{label:"basic",permalink:"/docs/tags/basic"},{label:"gas",permalink:"/docs/tags/gas"}],version:"current",sidebarPosition:8,frontMatter:{title:"8 Gas",author:"thurendous, Polymetis",date:"August 15, 2022",keywords:["solidity","gas price","gas"],description:"gas and gas price of Ethereum",tags:["basic","gas"]},sidebar:"tutorialSidebar",previous:{title:"7 Unit of Ethereum(ether and wei)",permalink:"/docs/Learning/EtherAndWei"},next:{title:"9 If and Else",permalink:"/docs/Learning/ifElse"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30ac\u30b9\u4ee3"},"\u30ac\u30b9\u4ee3"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u306b\u304a\u3044\u3066\u306f\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u9001\u308b\u306e\u306b\u30ac\u30b9\u4ee3\u304c\u767a\u751f\u3059\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u306f\u30d1\u30d6\u30ea\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306a\u306e\u3067\u516c\u5171\u6027\u3092\u6709\u3059\u308b\u30a4\u30f3\u30d5\u30e9\u306e\u3088\u3046\u306a\u3082\u306e"),(0,a.kt)("li",{parentName:"ul"},"\u30ac\u30b9\u4ee3\u3068\u306f\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u3068\u3044\u3046\u516c\u5171\u6027\u306e\u3042\u308b\u30b5\u30fc\u30d3\u30b9\u3092\u4f7f\u3046\u305f\u3081\u306e\u624b\u6570\u6599 \u21e2 \u4f8b\u3048\u308b\u306a\u3089\u6c34\u9053\u4ee3\u307f\u305f\u306a\u3082\u306e\u3001\u4f7f\u3048\u3070\u304a\u91d1\u304c\u304b\u304b\u308b"))),(0,a.kt)("li",{parentName:"ul"},"\u30ac\u30b9\u4ee3\u306e\u8a08\u7b97\u65b9\u6cd5\u306f\u4ee5\u4e0b\u3068\u306a\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u304b\u304b\u3063\u305f\u30ac\u30b9\u4ee3 = gas spent ","*"," gas price"),(0,a.kt)("li",{parentName:"ul"},"gas spent: \u4f7f\u3063\u305f\u30ac\u30b9\u306e\u6570\u91cf \u21e2 \u4f7f\u3063\u305f\u6c34\u306e\u91cf"),(0,a.kt)("li",{parentName:"ul"},"gas price: \u4f7f\u3063\u305f\u30ac\u30b9\u306e\u5358\u4f4d\u3042\u305f\u308a\u306e\u4fa1\u683c \u21e2 \u4f7f\u3063\u305f\u6c34\u306e\u4fa1\u683c/m^3"))),(0,a.kt)("li",{parentName:"ul"},"\u30ac\u30b9\u4ee3\u3092\u9ad8\u304f\u652f\u6255\u3063\u305f\u307b\u3046\u304c\u30d6\u30ed\u30c3\u30af\u306b\u53d6\u308a\u8fbc\u307e\u308c\u308b\u512a\u5148\u5ea6\u304c\u9ad8\u304f\u306a\u308b \u21e2 \u6c34\u3092\u4f7f\u308f\u305b\u3066\u304f\u3060\u3055\u3044\u3068\u304a\u9858\u3044\u3057\u305f\u3089\u6c34\u9053\u5c40\u304b\u3089\u9ad8\u3044\u6599\u91d1\u3092\u6255\u3063\u305f\u4eba\u306e\u9806\u756a\u3067\u6c34\u3092\u4f7f\u308f\u305b\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u3044\u304d\u308c\u306a\u304b\u3063\u305f\u30ac\u30b9\u306f\u5909\u63db\u3055\u308c\u308b"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u3063\u305f\u30ac\u30b9\u306f\u5e30\u3063\u3066\u3053\u306a\u3044"),(0,a.kt)("li",{parentName:"ul"},"Gas Limit",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"2 \u7a2e\u985e\u304c\u3042\u308b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u3042\u306a\u305f\u81ea\u8eab\u304c\u8a2d\u5b9a\u3057\u305f gas limit"),(0,a.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u306e gas limit -> network \u306b\u3088\u308a\u8a2d\u5b9a\u3055\u308c\u308b")))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Gas {\n    // \u30ac\u30b9\u4ee3\u3092\u4f7f\u3046\u305f\u3081\u306b\u3001\u9069\u5f53\u306b\u3068\u72b6\u614b\u5909\u6570\u3092\u4f5c\u3063\u305f\n    // \u72b6\u614b\u5909\u6570\u306fStorage\u306b\u4fdd\u5b58\u3055\u308c\u3001\u5909\u66f4\u3059\u308b\u305f\u3073\u306b\u30ac\u30b9\u4ee3\u304c\u6d88\u8cbb\u3055\u308c\u308b\n    uint public i = 0;\n\n    // \u30ac\u30b9\u4ee3\u3092\u4f7f\u3044\u304d\u308b\u3068\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u5931\u6557\u3059\u308b\n    // \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3078\u306e\u5909\u66f4\u304c\u5b8c\u6210\u3055\u308c\u305a\n    // \u304b\u304b\u3063\u305f\u30ac\u30b9\u306f\u8fd4\u9084\u3055\u308c\u306a\u3044\n    function neverEndingLoop() public {\n        // \u308f\u3056\u3068\u7121\u9650\u30eb\u30fc\u30d7\u3092\u4f5c\u6210\u3057\u3066\u3059\u3079\u3066\u306e\u30ac\u30b9\u3092\u4f7f\u3044\u5207\u308b\n        // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u5931\u6557\u3059\u308b\n        // -> \u7d50\u679c\u3068\u3057\u3066i\u306e\u5024\u306f\u5909\u308f\u3089\u305a\u4f7f\u3063\u305f\u30ac\u30b9\u4ee3\u304c\u7121\u99c4\u306b\u306a\u308b\n        // -> \u5168\u3066revert\u3055\u308c\u308b\n        while (true) {\n            i += 1;\n        }\n    }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}u.isMDXComponent=!0}}]);