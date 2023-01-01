"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[1033],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,s(s({ref:t},c),{},{components:a})):n.createElement(g,s({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1550:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"private-variable-in-solidity-with-code-explained",title:"solidity\u306b\u304a\u3044\u3066\u306a\u305cprivate\u306a\u5909\u6570\u306fprivate\u3067\u306f\u306a\u3044\u306e\u304b",authors:["Thurendous","Polymetis"],blogDescription:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u5909\u6570\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3067\u306f\u306a\u3044",tags:["private","variable","solidity","\u5909\u6570"]},s=void 0,i={permalink:"/blog/private-variable-in-solidity-with-code-explained",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/About-private-var/2022-12-22-about-private-var.md",source:"@site/blog/About-private-var/2022-12-22-about-private-var.md",title:"solidity\u306b\u304a\u3044\u3066\u306a\u305cprivate\u306a\u5909\u6570\u306fprivate\u3067\u306f\u306a\u3044\u306e\u304b",description:"\u7d50\u8ad6\u3092\u8a00\u3063\u3066\u304a\u304d\u307e\u3059\u3068\u3001\u79d8\u5bc6\u3092\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u306b\u4e57\u305b\u308b\u306a\u3002private \u3068\u3044\u3046\u4fee\u98fe\u5b50\u3082\u79d8\u5bc6\u3092\u4fdd\u6301\u3059\u308b\u306e\u306b\u3001\u610f\u5473\u3092\u306a\u3055\u306a\u3044\u3002",date:"2022-12-22T00:00:00.000Z",formattedDate:"2022\u5e7412\u670822\u65e5",tags:[{label:"private",permalink:"/blog/tags/private"},{label:"variable",permalink:"/blog/tags/variable"},{label:"solidity",permalink:"/blog/tags/solidity"},{label:"\u5909\u6570",permalink:"/blog/tags/\u5909\u6570"}],readingTime:2.142,hasTruncateMarker:!1,authors:[{name:"Thurendous",title:"Think borderlessly",url:"https://github.com/thurendous",imageURL:"https://github.com/thurendous.png",key:"Thurendous"},{name:"Polymetis",title:"Do your best now",url:"https://github.com/PolymetisOutis",imageURL:"https://github.com/PolymetisOutis.png",key:"Polymetis"}],frontMatter:{slug:"private-variable-in-solidity-with-code-explained",title:"solidity\u306b\u304a\u3044\u3066\u306a\u305cprivate\u306a\u5909\u6570\u306fprivate\u3067\u306f\u306a\u3044\u306e\u304b",authors:["Thurendous","Polymetis"],blogDescription:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u5909\u6570\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3067\u306f\u306a\u3044",tags:["private","variable","solidity","\u5909\u6570"]},prevItem:{title:"ERC1155\u3068\u306f\u306a\u3093\u305e\u3084\uff08\u30b3\u30fc\u30c9\u89e3\u8aac\uff09",permalink:"/blog/what-is-ERC1155-with-code-explained"},nextItem:{title:"NFT\u3001ERC721\u3068\u306f\u306a\u3093\u305e\u3084\uff08\u30b3\u30fc\u30c9\u89e3\u8aac\uff09",permalink:"/blog/what-is-ERC721-and-NFT-with-code-explained"}},l={authorsImageUrls:[void 0,void 0]},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(9303).Z,width:"610",height:"640"})),(0,r.kt)("h1",{id:"tldr"},"TL;DR\uff1a"),(0,r.kt)("p",null,"\u7d50\u8ad6\u3092\u8a00\u3063\u3066\u304a\u304d\u307e\u3059\u3068\u3001\u79d8\u5bc6\u3092\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u306b\u4e57\u305b\u308b\u306a\u3002private \u3068\u3044\u3046\u4fee\u98fe\u5b50\u3082\u79d8\u5bc6\u3092\u4fdd\u6301\u3059\u308b\u306e\u306b\u3001\u610f\u5473\u3092\u306a\u3055\u306a\u3044\u3002"),(0,r.kt)("h1",{id:"\u52d8\u9055\u3044\u3057\u3066\u3044\u307e\u305b\u3093\u304b"},"\u52d8\u9055\u3044\u3057\u3066\u3044\u307e\u305b\u3093\u304b"),(0,r.kt)("p",null,"solidity \u306b\u89e6\u308b\u3068\u3001private \u3068\u3044\u3046\u4fee\u98fe\u5b50\u306b\u3067\u3042\u3046\u3053\u3068\u304c\u3042\u308b\u304b\u3068\u601d\u3046\u3093\u3067\u3059\u304c\u3001\u305d\u308c\u306f\u6642\u306b\u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u3068\u3044\u3046\u4fee\u98fe\u5b50\u3092\u3064\u3051\u3066\u3042\u308b\u306e\u3067\u3001\u3088\u308a\u79d8\u5bc6\u6027\u3092\u6301\u3063\u3066\u3044\u308b\u5909\u6570\u3067\u30d1\u30b9\u30ef\u30fc\u30c9\u3068\u304b\u3092\u4fdd\u5b58\u3059\u308c\u3070\u3088\u304f\u306d\uff1f\u3068\u52d8\u9055\u3044\u3092\u3059\u308b\u3068\u601d\u3044\u307e\u3059\u3002\u7d50\u8ad6\u304b\u3089\u3044\u3046\u3068\u3001\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3068\u3044\u3046\u3082\u306e\u306f\u5168\u304f\u3068\u8a00\u3063\u3066\u3044\u3044\u304f\u3089\u3044\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u304c\u3042\u308a\u307e\u305b\u3093\u306e\u3067\u3001\u79d8\u5bc6\u3092\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u306b\u4fdd\u5b58\u3059\u308b\u306e\u306f\u8ad6\u5916\u3060\u3068\u3044\u3046\u3053\u3068\u3067\u3059\u3002"),(0,r.kt)("h1",{id:"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u5909\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u307f\u308b"},"\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u5909\u6570\u3092\u547c\u3073\u51fa\u3057\u3066\u307f\u308b"),(0,r.kt)("p",null,"\u3055\u3066\u3001\u5b9f\u6f14\u3092\u4f34\u3063\u3066\u884c\u304d\u305f\u3044\u306e\u3067\u3001\u30b3\u30fc\u30c9\u3092\u5b9f\u969b\u306b\u52d5\u304b\u3057\u3066\u307f\u3066\u884c\u304d\u307e\u3057\u3087\u3046\u304b\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7654).Z,width:"576",height:"431"})),(0,r.kt)("p",null,"\u4eca\u56de\u306e\u4f7f\u3046\u30ec\u30dd\u30b8\u30c8\u30ea\u306f",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thurendous/private-var"},"\u3053\u3061\u3089"),"\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u30ec\u30dd\u30b8\u30c8\u30ea\u306e\u7d50\u679c\u3092\u898b\u305f\u3044\u65b9\u306f\u3053\u306e\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/thurendous/private-var\nyarn install\nyarn hardhat test\n")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7d50\u679c\u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"imageOfTerminalwithResult",src:a(1278).Z,width:"417",height:"153"})),(0,r.kt)("p",null,"\u4eca\u56de\u4f7f\u3063\u305f\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u30fc\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u3068",(0,r.kt)("inlineCode",{parentName:"p"},"contracts"),"\u306e\u307f\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u305d\u306e\u8a73\u7d30\u3092\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u3053\u3093\u306a\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u4f5c\u3063\u3066\u307f\u307e\u3057\u305f\u3002\n\u4e2d\u8eab\u306f\u81f3\u3063\u3066\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"LoginContract"),"\u3068\u3044\u3046\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u5ba3\u8a00"),(0,r.kt)("li",{parentName:"ul"},"private \u306a\u5909\u6570\u306e userName, password \u3092\u4f5c\u308a\u307e\u3057\u305f\u3002\n\u3053\u306e\uff12\u3064\u306e\u5909\u6570\u3092\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u3067\u521d\u671f\u5316\u3057\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: UNLICENSED\npragma solidity ^0.8.9;\n\n// Uncomment this line to use console.log\n// import "hardhat/console.sol";\n\ncontract LoginContract {\n    bytes32 private userName;\n    bytes32 private password;\n\n    constructor(bytes32 _username, bytes32 _password) {\n        userName = _username;\n        password = _password;\n    }\n}\n')),(0,r.kt)("p",null,"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u5358\u4f4d\u306f ",(0,r.kt)("inlineCode",{parentName:"p"},"slot")," \u3068\u8a00\u308f\u308c\u307e\u3059\u3002\u3053\u306e\u30b9\u30ed\u30c3\u30c8\u3092\u5b9f\u306f\u4f55\u3089\u304b\u306e\u65b9\u6cd5\u3067\u8aad\u307f\u53d6\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u306e\u3067\u3059\u3002"),(0,r.kt)("p",null,"\u7d9a\u3044\u3066\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"test"),"\u30d5\u30a9\u30eb\u30c0\u3092\u898b\u3066\u304f\u3060\u3055\u3044\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u304c\u63cf\u304b\u308c\u3066\u3044\u308b\u3068\u601d\u3044\u307e\u3059\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u30c6\u30b9\u30c8\u306e\u30d5\u30a9\u30eb\u30c0\u306f\u66f8\u3044\u305f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c6\u30b9\u30c8\u3092\u3059\u308b\u305f\u3081\u306e\u30d5\u30a9\u30eb\u30c0")),(0,r.kt)("p",null,"\u4eca\u56de\u306f\u30c6\u30b9\u30c8\u3092\u3059\u308b\u3068\u3044\u3046\u304b\u3001\u30b9\u30c8\u30ec\u30fc\u30b8\u306e\u30b9\u30ed\u30c3\u30c8\u3092\u8aad\u307f\u53d6\u308b\u3053\u3068\u306b\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const {\n    time,\n    loadFixture,\n} = require('@nomicfoundation/hardhat-network-helpers')\nconst { anyValue } = require('@nomicfoundation/hardhat-chai-matchers/withArgs')\nconst { expect } = require('chai')\nconst { ethers } = require('hardhat')\n\ndescribe('LoginContract', function () {\n    // this is the test we run to reveal the private variable\n    it('should show us private variable data', async function () {\n        const LoginContract = await ethers.getContractFactory('LoginContract')\n\n        const userName = ethers.utils.formatBytes32String('calvin')\n        const password = ethers.utils.formatBytes32String(\n            'passwordIsMyBigSecret'\n        )\n\n        const loginContract = await LoginContract.deploy(userName, password)\n\n        await loginContract.deployed() // wait for it to be deployed\n\n        const slot0 = await ethers.provider.getStorageAt(\n            loginContract.address,\n            0\n        )\n        const slot1 = await ethers.provider.getStorageAt(\n            loginContract.address,\n            1\n        )\n        const formatUsername = await ethers.utils.parseBytes32String(slot0)\n        const formatPassword = await ethers.utils.parseBytes32String(slot1)\n\n        console.log('userName should be ->', formatUsername)\n        console.log('password should be ->', formatPassword)\n    })\n})\n")),(0,r.kt)("p",null,"\u7d50\u69cb\u305f\u304f\u3055\u3093\u66f8\u304b\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u5c11\u3057\u305a\u3064\u3054\u8aac\u660e\u3057\u307e\u3059\u3002"),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u306e\u5927\u304d\u306a\u5358\u4f4d\u3001\u300cLoginContract \u3068\u3044\u3046\u30c6\u30b9\u30c8\u3092\u3059\u308b\u3088\u300d\u3068\u3044\u3046\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"describe('LoginContract', function () {\n\n}\n")),(0,r.kt)("p",null,"\u30c6\u30b9\u30c8\u306e\u3088\u308a\u5c0f\u3055\u306a\u5358\u4f4d\u3001\u6587\u5b57\u5217\u306e\u90e8\u5206\u306f\u81ea\u7531\u306b\u8a18\u8f09\u3057\u3066 OK\u3002\u81ea\u5206\u304c\u66f8\u3044\u305f\u306e\u306f\u300c\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u5024\u3092\u51fa\u3057\u3066\u304f\u308c\u308b\u3088\u300d\u3068\u3044\u3046\u3053\u3068\u3092\u610f\u5473\u3059\u308b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"}," it('should show us private variable data', async function () {\n\n}\n")),(0,r.kt)("p",null,"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30af\u30e9\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const LoginContract = await ethers.getContractFactory('LoginContract')\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sername"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," \u3092\u4f5c\u6210\u3057\u3066\u304a\u304d\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const userName = ethers.utils.formatBytes32String('calvin')\nconst password = ethers.utils.formatBytes32String('passwordIsMyBigSecret')\n")),(0,r.kt)("p",null,"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u307e\u3059\u3002\u305d\u306e\u3068\u304d\u306b\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\u306b\u5165\u3063\u3066\u3044\u308b\u5f15\u6570\u3001\u5148\u7a0b\u4f5c\u3063\u305f ",(0,r.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," \u3082\u4ee3\u5165\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const loginContract = await LoginContract.deploy(userName, password)\n")),(0,r.kt)("p",null,"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30c7\u30d7\u30ed\u30a4\u3092\u5f85\u3061\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"await loginContract.deployed() // wait for it to be deployed\n")),(0,r.kt)("p",null,"\u7d9a\u3044\u3066\u3001\u809d\u5fc3\u306a\u3068\u3053\u308d\u3067\u3059\u3002\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30b9\u30ed\u30c3\u30c8\u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002\u30dd\u30b8\u30b7\u30e7\u30f3\u306f\u305d\u308c\u305e\u308c 0, 1 \u3067\u3059\u3002\u3053\u308c\u306f",(0,r.kt)("inlineCode",{parentName:"p"},"userName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"\u306e\u30dd\u30b8\u30b7\u30e7\u30f3\u3068\u540c\u3058\u3067\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const slot0 = await ethers.provider.getStorageAt(loginContract.address, 0)\nconst slot1 = await ethers.provider.getStorageAt(loginContract.address, 1)\n")),(0,r.kt)("p",null,"\u8aad\u307f\u53d6\u3063\u305f\u5024\u3092\u6574\u5f62\u3057\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const formatUsername = await ethers.utils.parseBytes32String(slot0)\nconst formatPassword = await ethers.utils.parseBytes32String(slot1)\n")),(0,r.kt)("p",null,"\u30bf\u30fc\u30df\u30ca\u30eb\u3078\u8868\u793a\u3055\u305b\u307e\u3059\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"console.log('userName should be ->', formatUsername)\nconsole.log('password should be ->', formatPassword)\n")),(0,r.kt)("p",null,"\u3053\u308c\u3067\u5148\u7a0b\u306e\u7d50\u679c\u306e\u753b\u9762\u304c\u8868\u793a\u3055\u308c\u3066\u3001\u8aad\u307f\u53d6\u3089\u308c\u3066\u3044\u308b\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u306d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  LoginContract\nuserName should be -> calvin\npassword should be -> passwordIsMyBigSecret\n    \u2714 should show us private variable data (668ms)\n\n\n  1 passing (670ms)\n")),(0,r.kt)("p",null,"\u3060\u304b\u3089\u3001private \u306a\u5909\u6570\u3060\u3063\u305f\u3068\u3057\u3066\u3082\u3001\u79d8\u5bc6\u306a\u3053\u3068\u306f\u4f55\u4e00\u3064\u306d\u3048\u3088\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"THE END")))}u.isMDXComponent=!0},1278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ScreenShot2022-12-2223.15.42-59dbf7880f8c1c3254087890262418d7.png"},7654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hackableson-7231dea48b4d9fd535b7555e3cedde99.gif"},9303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hffgf-aee4161f7a372ddd7251b9927831f648.gif"}}]);