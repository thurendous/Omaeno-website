"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[2998],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8139:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={title:"Hello World",author:"MarkWu",date:"August 11, 2022",keywords:["solidity","hello","world"],description:"solidity hello world"},o=void 0,i={unversionedId:"tutorial-basics/lesson1",id:"tutorial-basics/lesson1",title:"Hello World",description:"solidity hello world",source:"@site/docs/tutorial-basics/lesson1.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/lesson1",permalink:"/en/docs/tutorial-basics/lesson1",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tutorial-basics/lesson1.md",tags:[],version:"current",frontMatter:{title:"Hello World",author:"MarkWu",date:"August 11, 2022",keywords:["solidity","hello","world"],description:"solidity hello world"},sidebar:"tutorialSidebar",previous:{title:"Congratulations!",permalink:"/en/docs/tutorial-basics/congratulations"},next:{title:"Tutorial - Extras",permalink:"/en/docs/category/tutorial---extras"}},s={},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"hello-world"},"Hello World"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},'// SPDX-License-Identifier: MIT ->\u3000SPDX\u2026\u306e\u884c\uff1a\u6163\u884c\u3068\u3057\u3066\u8457\u4f5c\u6a29\u3092\u5ba3\u8a00\npragma solidity ^0.8.13;\n\ncontract HelloWorld {\n    string public greet = "Hello World!";\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"// SPDX-License-Identifier: MIT"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6163\u884c\u3068\u3057\u3066\u8457\u4f5c\u6a29\u3092\u5ba3\u8a00"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"pragma solidity ^0.8.13;"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"solidity \u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u5ba3\u8a00\u3001^\u306e\u610f\u5473\u306f 0.8.13 \u3088\u308a\u4e0a 0.9.0 \u3088\u308a\u4e0b\u306e\u30d0\u30fc\u30b8\u30e7\u30f3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contract HelloWorld"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u5ba3\u8a00\u3001\u3053\u3053\u3067\u306f HelloWorld \u3068\u547d\u540d\u3057\u305f"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'string public greet = "Hello World!";'),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u5185\u5bb9\u3068\u3057\u3066\u3001greet \u3068\u3044\u3046\u72b6\u614b\u5909\u6570\u3092\u5ba3\u8a00\u3057\u3066\u521d\u671f\u5024\u3068\u3057\u3066",(0,l.kt)("inlineCode",{parentName:"li"},"Hello World"),"\u3092\u4ee3\u5165"))),(0,l.kt)("li",{parentName:"ul"},"\u305d\u306e\u4ed6\u30a2\u30c9\u30d0\u30a4\u30b9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u30d5\u30a1\u30a4\u30eb\u540d\u3082\u3067\u304d\u308b\u3060\u3051\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u540d\u3068\u540c\u4e00\u3068\u3057\u305f\u307b\u3046\u304c\u3088\u3044",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4f8b\uff1a\u4eca\u56de\u306e\u5834\u5408\u306f",(0,l.kt)("inlineCode",{parentName:"li"},"HelloWorld.sol"))))))),(0,l.kt)("admonition",{title:"Take care",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Example: This action is dangerous")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u306b\u3066\u8a66\u3059"))}p.isMDXComponent=!0}}]);