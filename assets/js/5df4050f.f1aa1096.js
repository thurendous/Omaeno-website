"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[8382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"5 Read and Write Variables",author:"MarkWu, Polymetis",date:"August 15, 2022",keywords:["solidity","read","write","variable"],description:"reading and writing an variable in solidity"},o="\u72b6\u614b\u5909\u6570\u306e\u66f8\u304d\u8fbc\u307f\u3084\u8aad\u307f\u8fbc\u307f",u={unversionedId:"Learning/readingAndWriting",id:"Learning/readingAndWriting",title:"5 Read and Write Variables",description:"reading and writing an variable in solidity",source:"@site/docs/Learning/6_readingAndWriting.md",sourceDirName:"Learning",slug:"/Learning/readingAndWriting",permalink:"/docs/Learning/readingAndWriting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Learning/6_readingAndWriting.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"5 Read and Write Variables",author:"MarkWu, Polymetis",date:"August 15, 2022",keywords:["solidity","read","write","variable"],description:"reading and writing an variable in solidity"},sidebar:"tutorialSidebar",previous:{title:"4 Data Type",permalink:"/docs/Learning/constants&immutable"},next:{title:"6 Unit of Ethereum(ether and wei)",permalink:"/docs/Learning/EtherAndWei"}},c={},s=[],l={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u72b6\u614b\u5909\u6570\u306e\u66f8\u304d\u8fbc\u307f\u3084\u8aad\u307f\u8fbc\u307f"},"\u72b6\u614b\u5909\u6570\u306e\u66f8\u304d\u8fbc\u307f\u3084\u8aad\u307f\u8fbc\u307f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract SimpleStorage {\n    // \u6570\u5b57\u3092\u683c\u7d0d\u3059\u308bstate variable(\u72b6\u614b\u5909\u6570)\u3092\u5ba3\u8a00\n    uint public num;\n\n    // state variable\u3092\u5909\u66f4\u3059\u308b\u306b\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u767a\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\uff08\u30ac\u30b9\u4ee3\u3092\u6255\u3046\u5fc5\u8981\u304c\u3042\u308b\uff09\n    function set(uint _num) public {\n        num = _num;\n    }\n\n    // \u8aad\u307f\u8fbc\u307f\u306b\u95a2\u3057\u3066\u306f\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u767a\u884c\u306e\u5fc5\u8981\u306f\u306a\u3044\uff08\u30ac\u30b9\u4ee3\u306f\u767a\u751f\u3057\u306a\u3044\uff09\n    function get() public view returns (uint) {\n        return num;\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}d.isMDXComponent=!0}}]);