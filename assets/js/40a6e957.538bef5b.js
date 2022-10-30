"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[6599],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(k,i(i({ref:t},l),{},{components:n})):r.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<c;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const c={title:"41 Hashing With Keccak256",author:"thurendous, Polymetis",date:"October 30th, 2022",keywords:["solidity","keccak256"],description:"understand keccak256 through solidity code example",tags:["solidity","keccak256"]},i=void 0,o={unversionedId:"Learning/HashingWIthKeccak256",id:"Learning/HashingWIthKeccak256",title:"41 Hashing With Keccak256",description:"understand keccak256 through solidity code example",source:"@site/docs/Learning/41_HashingWIthKeccak256.md",sourceDirName:"Learning",slug:"/Learning/HashingWIthKeccak256",permalink:"/docs/Learning/HashingWIthKeccak256",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/41_HashingWIthKeccak256.md",tags:[{label:"solidity",permalink:"/docs/tags/solidity"},{label:"keccak256",permalink:"/docs/tags/keccak-256"}],version:"current",sidebarPosition:41,frontMatter:{title:"41 Hashing With Keccak256",author:"thurendous, Polymetis",date:"October 30th, 2022",keywords:["solidity","keccak256"],description:"understand keccak256 through solidity code example",tags:["solidity","keccak256"]},sidebar:"tutorialSidebar",previous:{title:"40 ABI decode",permalink:"/docs/Learning/ABIdecode"},next:{title:"42 Verifying Signature",permalink:"/docs/Learning/VerifyingSignature copy"}},s={},u=[],l={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"keccak256 \u306f\u30cf\u30c3\u30b7\u30e5\u5024\u3092\u8a08\u7b97\u3057\u3066\u304f\u308c\u308b\u3002"),(0,a.kt)("p",null,"\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9\u3068\u3057\u3066\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u610f\u7684\u306a ID \u751f\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u30b3\u30f3\u30d1\u30af\u30c8\u306a\u6697\u53f7\u7684\u306a\u7f72\u540d\uff08\u5927\u304d\u306a\u30a4\u30f3\u30d7\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u3067\u306f\u306a\u304f\u3001\u30cf\u30c3\u30b7\u30e5\u5024\u306b\u5bfe\u3057\u3066\u7f72\u540d\u3059\u308b\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract HashFunction {\n    // \u30cf\u30c3\u30b7\u30e5\u5024\u3092\u8a08\u7b97\u3059\u308b\n    function hash(\n        string memory _text,\n        uint _num,\n        address _addr\n    ) public pure returns (bytes32) {\n        return keccak256(abi.encodePacked(_text, _num, _addr));\n    }\n\n    // \u30cf\u30c3\u30b7\u30e5\u885d\u7a81\n    // \u30cf\u30c3\u30b7\u30e5\u5024\u306e\u885d\u7a81\u304c\u8d77\u304d\u3046\u308b\u30b1\u30fc\u30b9\n    // to abi.encodePacked. In such case, you should use abi.encode instead.\n    function collision(string memory _text, string memory _anotherText)\n        public\n        pure\n        returns (bytes32)\n    {\n        // \u4ee5\u4e0b\u306e\u3053\u3068\u304c\u8d77\u304d\u308b\u3068\u5165\u529b\u5024\u304c\u540c\u3058\u3068\u306a\u308a\u3001\u5024\u304c\u7570\u306a\u308b\u306b\u3082\u304b\u304b\u308f\u3089\u305a\u540c\u3058\u30cf\u30c3\u30b7\u30e5\u5024\u3068\u306a\u308b\u3002\n        // \u305d\u306e\u5834\u5408\u306fabi.encodePacked\u3067\u306f\u306a\u304f\u3001abi.encode\u3092\u4f7f\u3046\u3079\u304d\n        // encodePacked(AAA, BBB) -> AAABBB\n        // encodePacked(AA, ABBB) -> AAABBB\n        return keccak256(abi.encodePacked(_text, _anotherText));\n    }\n}\n\n// \u30cf\u30c3\u30b7\u30e5\u5024\u306e\u9006\u7b97\u3092\u8a66\u3059\u305f\u3081\u306e\u95a2\u6570\u2192\u9006\u7b97\u306f\u4e0d\u53ef\u80fd\ncontract GuessTheMagicWord {\n    bytes32 public answer =\n        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;\n\n    // Magic word is "Solidity"\n    function guess(string memory _word) public view returns (bool) {\n        return keccak256(abi.encodePacked(_word)) == answer;\n    }\n}\n\n\n')),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}d.isMDXComponent=!0}}]);