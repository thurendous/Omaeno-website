"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[5854],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>d});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},c=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=u(n),d=i,m=y["".concat(s,".").concat(d)]||y[d]||p[d]||a;return n?t.createElement(m,o(o({ref:r},c),{},{components:n})):t.createElement(m,o({ref:r},c))}));function d(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},2143:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var t=n(7462),i=(n(7294),n(3905));const a={title:"38 Library",author:"thurendous, Polymetis",date:"October 30th, 2022",keywords:["solidity","library"],description:"understand library through solidity code example",tags:["solidity","library"]},o=void 0,l={unversionedId:"Learning/Library",id:"Learning/Library",title:"38 Library",description:"understand library through solidity code example",source:"@site/docs/Learning/38_Library.md",sourceDirName:"Learning",slug:"/Learning/Library",permalink:"/docs/Learning/Library",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/38_Library.md",tags:[{label:"solidity",permalink:"/docs/tags/solidity"},{label:"library",permalink:"/docs/tags/library"}],version:"current",sidebarPosition:38,frontMatter:{title:"38 Library",author:"thurendous, Polymetis",date:"October 30th, 2022",keywords:["solidity","library"],description:"understand library through solidity code example",tags:["solidity","library"]},sidebar:"tutorialSidebar",previous:{title:"37 Import",permalink:"/docs/Learning/Import"},next:{title:"39 ABI encode",permalink:"/docs/Learning/ABIencode"}},s={},u=[],c={toc:u};function p(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u30e9\u30a4\u30d6\u30e9\u30ea\u306f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3068\u4f3c\u3066\u3044\u308b\u304c\u3001\u30a4\u30fc\u30b5\u3092\u9001\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u3057\u3001\u72b6\u614b\u5909\u6570\u3082\u6301\u3063\u3066\u3044\u306a\u3044\u3002"),(0,i.kt)("p",null,"\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\u95a2\u6570\u304c internal \u306a\u5834\u5408\u306f\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u5185\u8535\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001\u30c7\u30d7\u30ed\u30a4\u3057\u306a\u304f\u3066\u3082\u3088\u3044\u304c\u3001\u305d\u3046\u51fa\u306a\u3044\u5834\u5408\u306f\u30c7\u30d7\u30ed\u30a4\u306e\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\nlibrary Math {\n    function sqrt(uint y) internal pure returns (uint z) {\n        if (y > 3) {\n            z = y;\n            uint x = y / 2 + 1;\n            while (x < z) {\n                z = x;\n                x = (y / x + x) / 2;\n            }\n        } else if (y != 0) {\n            z = 1;\n        }\n        // else z = 0 (default value)\n    }\n}\n\n// library \u3092\u4f7f\u30461\u3064\u76ee\u306e\u65b9\u6cd5\ncontract TestMath {\n    function testSquareRoot(uint x) public pure returns (uint) {\n        return Math.sqrt(x);\n    }\n}\n\n// index\u306b\u4f4d\u7f6e\u3059\u308b\u914d\u5217\u306e\u8981\u7d20\u3092\u524a\u9664\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\nlibrary Array {\n    function remove(uint[] storage arr, uint index) public {\n        // \u914d\u5217\u6700\u5f8c\u306e\u8981\u7d20\u3092\u79fb\u52d5\u3057\u3066\u3001\u524a\u9664\u3059\u308b\n        require(arr.length > 0, "Can\'t remove from empty array");\n        arr[index] = arr[arr.length - 1];\n        arr.pop();\n    }\n}\n\n// Array\u30e9\u30a4\u30d6\u30e9\u30ea\u3092\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\ncontract TestArray {\n    using Array for uint[];\n\n    uint[] public arr;\n\n    function testArrayRemove() public {\n        for (uint i = 0; i < 3; i++) {\n            arr.push(i);\n        }\n\n        arr.remove(1);\n\n        assert(arr.length == 2);\n        assert(arr[0] == 0);\n        assert(arr[1] == 2);\n    }\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix"),"\u3067\u8a66\u3059"))}p.isMDXComponent=!0}}]);