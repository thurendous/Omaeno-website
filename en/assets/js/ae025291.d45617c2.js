"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[8280],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),y=c(t),b=a,d=y["".concat(s,".").concat(b)]||y[b]||p[b]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},4226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const o={title:"27 Payable",author:"thurendous, Polymetis",date:"October 1st, 2022",keywords:["solidity","Payable"],description:"solidity's Payable keyword",tags:["basic","payable"]},i=void 0,l={unversionedId:"Learning/Payable",id:"Learning/Payable",title:"27 Payable",description:"solidity's Payable keyword",source:"@site/docs/Learning/28_Payable.md",sourceDirName:"Learning",slug:"/Learning/Payable",permalink:"/en/docs/Learning/Payable",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/28_Payable.md",tags:[{label:"basic",permalink:"/en/docs/tags/basic"},{label:"payable",permalink:"/en/docs/tags/payable"}],version:"current",sidebarPosition:28,frontMatter:{title:"27 Payable",author:"thurendous, Polymetis",date:"October 1st, 2022",keywords:["solidity","Payable"],description:"solidity's Payable keyword",tags:["basic","payable"]},sidebar:"tutorialSidebar",previous:{title:"27 Interface",permalink:"/en/docs/Learning/Interface"},next:{title:"How to Use",permalink:"/en/docs/intro"}},s={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"payable \u3068\u3057\u3066\u5ba3\u8a00\u3055\u308c\u305f\u95a2\u6570\u3001\u30a2\u30c9\u30ec\u30b9\u306f native token(\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u306e\u5834\u5408\u306f\u30a4\u30fc\u30b5)\u306e\u53d7\u4fe1\u304c\u3067\u304d\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u4fdd\u5b58\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Payable {\n    // Payable\u3092\u3064\u3051\u305f\u30a2\u30c9\u30ec\u30b9\u306f\u30a4\u30fc\u30b5\u3092\u53d7\u3051\u53d6\u308c\u308b\n    address payable public owner;\n\n    // Payable\u3092\u3064\u3051\u305fconstructor\u3082\u540c\u69d8\u306b\u30a4\u30fc\u30b5\u3092\u53d7\u3051\u53d6\u308c\u308b\n    constructor() payable {\n        owner = payable(msg.sender);\n    }\n\n    // \u30a4\u30fc\u30b5\u3092\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u30c7\u30dd\u30b8\u30c3\u30c8\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\n    // \u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3068\u3068\u3082\u306b\u3001\u30a4\u30fc\u30b5\u3092\u9001\u4ed8\u3059\u308b\u3068\n    // \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30a4\u30fc\u30b5\u306e\u30d0\u30e9\u30f3\u30b9\u304c\u5897\u52a0\u3059\u308b\n    function deposit() public payable {}\n\n    // \u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3068\u3068\u3082\u306b\u30a4\u30fc\u30b5\u3092\u9001\u4ed8\u3059\u308b\u3068\n    // \u30a8\u30e9\u30fc\u306b\u306a\u308b\u3002\u306a\u305c\u306a\u3089\u3001payable\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u306a\u3044\u304b\u3089\n    function notPayable() public {}\n\n    // \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u304b\u3089\u30a4\u30fc\u30b5\u3092\u5f15\u304d\u51fa\u3059\u7528\u306e\u95a2\u6570\n    function withdraw() public {\n        // \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u3042\u308b\u30a4\u30fc\u30b5\u3092\u5909\u6570\u306b\u4fdd\u5b58\u3057\n        uint amount = address(this).balance;\n\n        // \u3059\u3079\u3066\u306e\u30a4\u30fc\u30b5\u3092\u30aa\u30fc\u30ca\u30fc\u3078\u9001\u91d1\n        // \u30aa\u30fc\u30ca\u30fc\u304c\u30a4\u30fc\u30b5\u306e\u9001\u91d1\u5148\u306e\u305f\u3081\u3001\u898b\u3066\u306e\u901a\u308apayable\u3068\u3044\u3046\u30ef\u30fc\u30c9\u304c\u3064\u3051\u3089\u308c\u3066\u3044\u308b\n        (bool success, ) = owner.call{value: amount}("");\n        require(success, "Failed to send Ether");\n    }\n\n    // \u30a4\u30fc\u30b5\u3092_to\u30a2\u30c9\u30ec\u30b9\u3078\u9001\u4ed8\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\n    // \u898b\u3066\u306e\u901a\u308a\u3001\u5f15\u6570\u3067\u3042\u308b_to\u30a2\u30c9\u30ec\u30b9\u306fpayable\u304c\u3064\u3051\u3089\u308c\u3066\u3044\u308b\n    function transfer(address payable _to, uint _amount) public {\n        (bool success, ) = _to.call{value: _amount}("");\n        require(success, "Failed to send Ether");\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);