"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[8025],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),b=s(t),y=i,m=b["".concat(o,".").concat(y)]||b[y]||p[y]||a;return t?r.createElement(m,l(l({ref:n},c),{},{components:t})):r.createElement(m,l({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=b;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var s=2;s<a;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},3282:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"26 Visibility",author:"thurendous, Polymetis",date:"September 30, 2022",keywords:["solidity","visibility","public","internal","external","private"],description:"solidity's visibility",tags:["basic","visibility","public","internal"]},l=void 0,u={unversionedId:"Learning/visibility",id:"Learning/visibility",title:"26 Visibility",description:"solidity's visibility",source:"@site/docs/Learning/26_visibility.md",sourceDirName:"Learning",slug:"/Learning/visibility",permalink:"/docs/Learning/visibility",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/26_visibility.md",tags:[{label:"basic",permalink:"/docs/tags/basic"},{label:"visibility",permalink:"/docs/tags/visibility"},{label:"public",permalink:"/docs/tags/public"},{label:"internal",permalink:"/docs/tags/internal"}],version:"current",sidebarPosition:26,frontMatter:{title:"26 Visibility",author:"thurendous, Polymetis",date:"September 30, 2022",keywords:["solidity","visibility","public","internal","external","private"],description:"solidity's visibility",tags:["basic","visibility","public","internal"]},sidebar:"tutorialSidebar",previous:{title:"25 Calling Parents' Function",permalink:"/docs/Learning/callingParentsFunction"},next:{title:"How to Use",permalink:"/docs/intro"}},o={},s=[],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u95a2\u6570\u306f\u30a2\u30af\u30bb\u30b9\u306e\u7bc4\u56f2\u3092\u5b9a\u7fa9\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3002\u305d\u306e\u3068\u304d\u306b\u51fa\u3066\u304f\u308b\u306e\u306f visibility \u3060\u3002\nvisibility \u306f\u3044\u308f\u3086\u308b\u898b\u3048\u308b\u7bc4\u56f2\u3092\u898f\u5b9a\u3059\u308b\u30ef\u30fc\u30c9\u3067\u3042\u308a\u3001\u4ee5\u4e0b\u304c\u3042\u308b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"public:\u3069\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u3067\u3082\u547c\u3073\u51fa\u305b\u308b"),(0,i.kt)("li",{parentName:"ul"},"private:\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u5185\u90e8\u304b\u3089\u547c\u3073\u51fa\u305b\u308b"),(0,i.kt)("li",{parentName:"ul"},"internal:\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3042\u308b\u3044\u306f\u7d99\u627f\u3057\u305f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u304b\u3089\u547c\u3073\u51fa\u305b\u308b"),(0,i.kt)("li",{parentName:"ul"},"external:\u5916\u90e8\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3042\u308b\u3044\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u304b\u3089\u3067\u3057\u304b\u547c\u3073\u51fa\u305b\u306a\u3044")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol"},'\n\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\ncontract Base {\n    // Private\u3092\u3064\u3051\u305f\u95a2\u6570\u306f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u5185\u90e8\u3067\u3057\u304b\u898b\u3048\u306a\u304f\u306a\u308b\n    // \u7d99\u627f\u3057\u305f\u3068\u3057\u3066\u3082\u307f\u3048\u306a\u3044\n    function privateFunc() private pure returns (string memory) {\n        return "private function called";\n    }\n\n    function testPrivateFunc() public pure returns (string memory) {\n        return privateFunc();\n    }\n\n    // Internal\u3092\u3064\u3051\u305f\u95a2\u6570\u306f\n    // - \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u5185\u90e8\u304b\u3089\u547c\u3073\u51fa\u305b\u308b\n    // - \u7d99\u627f\u3057\u305f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u304b\u3089\u3082\u898b\u3048\u3066\u547c\u3073\u51fa\u305b\u308b\n    function internalFunc() internal pure returns (string memory) {\n        return "internal function called";\n    }\n\n    function testInternalFunc() public pure virtual returns (string memory) {\n        return internalFunc();\n    }\n\n    // Public\u3092\u3064\u3051\u305f\u95a2\u6570\u3092\u547c\u3073\u51fa\u305b\u308b\u306e\u306f\n    // - \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u5185\u90e8\n    // - \u7d99\u627f\u3057\u305f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\n    // - \u5916\u90e8\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3042\u308b\u3044\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\n    function publicFunc() public pure returns (string memory) {\n        return "public function called";\n    }\n\n    // External\u3092\u3064\u3051\u305f\u95a2\u6570\u3092\u547c\u3073\u51fa\u305b\u308b\u306e\u306f\n    // - \u5916\u90e8\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3042\u308b\u3044\u306f\u30a2\u30ab\u30a6\u30f3\u30c8\u306e\u307f\n    function externalFunc() external pure returns (string memory) {\n        return "external function called";\n    }\n\n    // \u3053\u308c\u306fexternal\u306a\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u306b\u306a\u308b\u306e\u3067\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306f\u3046\u307e\u304f\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305a\u30a8\u30e9\u30fc\u304c\u3067\u308b\n    // function testExternalFunc() public pure returns (string memory) {\n    //     return externalFunc();\n    // }\n\n    // \u72b6\u614b\u5909\u6570\u306e\u5834\u5408\n    string private privateVar = "my private variable";\n    string internal internalVar = "my internal variable";\n    string public publicVar = "my public variable";\n    // \u72b6\u614b\u5909\u6570\u306fexternal\u306b\u3067\u304d\u306a\u3044\u306e\u3067\u3001\u4ee5\u4e0b\u306e\u30b3\u30fc\u30c9\u3082\u30a8\u30e9\u30fc\u304c\u3067\u308b\n    // string external externalVar = "my external variable";\n}\n\ncontract Child is Base {\n    // \u7d99\u627f\u3057\u305f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306fprivate\u306a\u95a2\u6570\u3084\u72b6\u614b\u5909\u6570\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u3067\u304d\u306a\u3044\n    // function testPrivateFunc() public pure returns (string memory) {\n    //     return privateFunc();\n    // }\n\n    // Internal\u306a\u95a2\u6570\u306f\u7d99\u627f\u3092\u3057\u305f\u95a2\u6570\u306b\u304a\u3044\u3066\u3082\u5b9f\u884c\u53ef\u80fd\n    function testInternalFunc() public pure override returns (string memory) {\n        return internalFunc();\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);