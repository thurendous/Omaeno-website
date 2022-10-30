"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[1216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(r),y=a,m=p["".concat(c,".").concat(y)]||p[y]||u[y]||l;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5040:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={title:"1 Ether Wallet",author:"thurendous, Polymetis",date:"Otcober 30th, 2022",keywords:["solidity","wallet"],description:"solidity ether wallet",tags:["advanced solidity","app","wallet","ether"]},o=void 0,i={unversionedId:"SolidityAdvanced/EtherWallet",id:"SolidityAdvanced/EtherWallet",title:"1 Ether Wallet",description:"solidity ether wallet",source:"@site/docs/SolidityAdvanced/EtherWallet.md",sourceDirName:"SolidityAdvanced",slug:"/SolidityAdvanced/EtherWallet",permalink:"/en/docs/SolidityAdvanced/EtherWallet",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/SolidityAdvanced/EtherWallet.md",tags:[{label:"advanced solidity",permalink:"/en/docs/tags/advanced-solidity"},{label:"app",permalink:"/en/docs/tags/app"},{label:"wallet",permalink:"/en/docs/tags/wallet"},{label:"ether",permalink:"/en/docs/tags/ether"}],version:"current",frontMatter:{title:"1 Ether Wallet",author:"thurendous, Polymetis",date:"Otcober 30th, 2022",keywords:["solidity","wallet"],description:"solidity ether wallet",tags:["advanced solidity","app","wallet","ether"]},sidebar:"tutorialSidebar",previous:{title:"Solidity Advanced",permalink:"/en/docs/category/solidity-advanced"},next:{title:"2 Multi-Sig Wallet",permalink:"/en/docs/SolidityAdvanced/Multi-SigWallet"}},c={},d=[],s={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u7c21\u5358\u306a\u30a6\u30a9\u30ec\u30c3\u30c8\u3092\u4f5c\u308b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ab0\u3067\u3082\u30a6\u30a9\u30ec\u30c3\u30c8\u3078\u30a4\u30fc\u30b5\u3092\u5165\u91d1\u3067\u304d\u308b"),(0,a.kt)("li",{parentName:"ul"},"owner \u306e\u307f\u304c\u51fa\u91d1\u3067\u304d\u308b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract EtherWallet {\n    // owner\n    address payable public owner;\n\n    // owner\u3092deployer\u306b\u8a2d\u5b9a\u3057\u3066\u304a\u304f\n    constructor() {\n        owner = payable(msg.sender);\n    }\n\n    // ether\u3092\u53d7\u3051\u53d6\u308breceive\u95a2\u6570\n    receive() external payable {}\n\n    // withdraw\u95a2\u6570\u3001owner\u306e\u307f\u547c\u3079\u308b\n    function withdraw(uint _amount) external {\n        require(msg.sender == owner, "caller is not owner");\n        payable(msg.sender).transfer(_amount);\n    }\n\n    // wallet balance\u3092\u898b\u308b\u7528\n    function getBalance() external view returns (uint) {\n        return address(this).balance;\n    }\n}\n\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}u.isMDXComponent=!0}}]);