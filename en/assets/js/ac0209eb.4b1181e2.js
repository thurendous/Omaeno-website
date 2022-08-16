"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"3 Variables",author:"MarkWu, Polymetis",date:"August 15, 2022",keywords:["solidity","variable"],description:"data type of solidity",tags:["basic","variable"]},l="\u5909\u6570",o={unversionedId:"Learning/variables",id:"Learning/variables",title:"3 Variables",description:"data type of solidity",source:"@site/docs/Learning/4_variables.md",sourceDirName:"Learning",slug:"/Learning/variables",permalink:"/en/docs/Learning/variables",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/4_variables.md",tags:[{label:"basic",permalink:"/en/docs/tags/basic"},{label:"variable",permalink:"/en/docs/tags/variable"}],version:"current",sidebarPosition:4,frontMatter:{title:"3 Variables",author:"MarkWu, Polymetis",date:"August 15, 2022",keywords:["solidity","variable"],description:"data type of solidity",tags:["basic","variable"]},sidebar:"tutorialSidebar",previous:{title:"2 Data Type",permalink:"/en/docs/Learning/dataType"},next:{title:"4 Data Type",permalink:"/en/docs/Learning/constants&immutable"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5909\u6570"},"\u5909\u6570"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Variables {\n    // \u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u308b\u306e\u306fstate variables(\u72b6\u614b\u5909\u6570)\n    string public text = "Hello";\n    uint public num = 123;\n\n    function doSomething() public view returns(uint, uint, address){\n        // local\u306b\u5ba3\u8a00\u3055\u308c\u305f\u5909\u6570\u306f\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u305a\n        uint i = 456;\n\n        // \u3088\u304f\u4f7f\u3046\u30b0\u30ed\u30fc\u30d0\u30eb\u306a\u5909\u6570\u306e\u4f8b\n        uint timestamp = block.timestamp; // \u73fe\u5728\u306e\u30d6\u30ed\u30c3\u30af\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7(\u6642\u9593\u3092\u610f\u5473\u3059\u308b)\n        address sender = msg.sender; // caller\u306e\u30a2\u30c9\u30ec\u30b9\uff08\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u305f\u4eba\u306e\u30a2\u30c9\u30ec\u30b9\uff09\n\n        return (i, timestamp, sender);\n    }\n}\n')),(0,n.kt)("p",null,"3 \u7a2e\u985e\u306e\u5909\u6570\u30bf\u30a4\u30d7\u304c\u3042\u308b\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u30ed\u30fc\u30ab\u30eb\u5909\u6570"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5206\u3067\u4f5c\u308b\u3082\u306e"),(0,n.kt)("li",{parentName:"ul"},"\u95a2\u6570\u5185\u3067\u5ba3\u8a00"),(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u306a\u3044"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u72b6\u614b\u5909\u6570"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u5206\u3067\u4f5c\u308b\u3082\u306e"),(0,n.kt)("li",{parentName:"ul"},"\u95a2\u6570\u306e\u5916\u3067\u5ba3\u8a00\u3055\u308c\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3055\u308c\u308b"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u30b0\u30ed\u30fc\u30d0\u30eb\u5909\u6570"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f93\u6765\u306e\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u5909\u6570\u306e\u30a4\u30e1\u30fc\u30b8\u3068\u7570\u306a\u308b"),(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u4ed8\u5e2f\u3059\u308b\u65e2\u5b58\u306e\u60c5\u5831\u3092\u547c\u3073\u51fa\u305b\u308b\u3082\u306e",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b:timestamp \u306f UNIX ",(0,n.kt)("a",{parentName:"li",href:"https://url-c.com/tc/"},"\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u306e\u3053\u3068"))))))),(0,n.kt)("admonition",{title:"tip",type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u306b\u304a\u3044\u3066\u306f\u3001data \u306e\u4fdd\u5b58\u306f Storage \u3068 Memory \u306e 2 \u7a2e\u985e\u304c\u3042\u308a\u3001\u30ed\u30fc\u30ab\u30eb\u5909\u6570\u306f Memory\u3001\u72b6\u614b\u5909\u6570\u306f Storage \u306b\u4fdd\u5b58\u3055\u308c\u308b\u3002"),(0,n.kt)("li",{parentName:"ul"},"Storage \u306b\u4fdd\u5b58\u3055\u308c\u308b\u3068\u6c38\u4e45\u5316\u3055\u308c\u3066\u3001Memory \u306f\u4e00\u6642\u7684\u306a\u3082\u306e - Storage \u306e\u60c5\u5831\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u306f\u300c\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u30c7\u30fc\u30bf\u306e\u6539\u5909\u300d\u3068\u306a\u308b\u3002"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}c.isMDXComponent=!0}}]);