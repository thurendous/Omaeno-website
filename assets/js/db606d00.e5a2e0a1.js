"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[8017],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=i,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7926:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const a={title:"25 Calling Parents' Function",author:"thurendous, Polymetis",date:"September 29, 2022",keywords:["solidity","parents","call"],description:"solidity's inherited functions calling sequence",tags:["basic","call","parents"]},o=void 0,l={unversionedId:"Learning/callingParentsFunction",id:"Learning/callingParentsFunction",title:"25 Calling Parents' Function",description:"solidity's inherited functions calling sequence",source:"@site/docs/Learning/25_callingParentsFunction.md",sourceDirName:"Learning",slug:"/Learning/callingParentsFunction",permalink:"/docs/Learning/callingParentsFunction",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Learning/25_callingParentsFunction.md",tags:[{label:"basic",permalink:"/docs/tags/basic"},{label:"call",permalink:"/docs/tags/call"},{label:"parents",permalink:"/docs/tags/parents"}],version:"current",sidebarPosition:25,frontMatter:{title:"25 Calling Parents' Function",author:"thurendous, Polymetis",date:"September 29, 2022",keywords:["solidity","parents","call"],description:"solidity's inherited functions calling sequence",tags:["basic","call","parents"]},sidebar:"tutorialSidebar",previous:{title:"24 Shadowing Inheritance",permalink:"/docs/Learning/shadowing_inheritance"},next:{title:"26 Visibility",permalink:"/docs/Learning/visibility"}},c={},s=[],u={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u89aa\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u95a2\u6570\u306f\u305d\u306e\u307e\u307e\u547c\u3076\u304b\u3001super \u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u4f7f\u3063\u3066\u547c\u3076\u3068\u3044\u3046\u65b9\u6cd5\u304c\u3042\u308b"),(0,i.kt)("li",{parentName:"ul"},"super \u3092\u4f7f\u3046\u3053\u3068\u3067\u3001\u76f4\u8fd1\u306e\u7d99\u627f\u3057\u305f\u89aa\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306f\u5168\u90e8\u547c\u3070\u308c\u308b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: MIT\npragma solidity ^0.8.13;\n\n/* \u7d99\u627f\u95a2\u4fc2\u56f3\n   A\n /  \\\nB   C\n \\ /\n  D\n*/\n\ncontract A {\n    // \u3053\u308c\u306f\u30a4\u30d9\u30f3\u30c8\u3067\u3001\u95a2\u6570\u304b\u3089\u653e\u51fa\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\n    // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30ed\u30b0\u3068\u3057\u3066\u8a18\u9332\u3055\u308c\u308b\n    // \u95a2\u6570\u306e\u547c\u3070\u308c\u308b\u3053\u3068\u3092\u8ffd\u8de1\u3059\u308b\u3053\u3068\u306b\u95a2\u3057\u3066\u6709\u52b9\u306b\u306a\u308b\n    event Log(string message);\n\n    function foo() public virtual {\n        emit Log("A.foo called");\n    }\n\n    function bar() public virtual {\n        emit Log("A.bar called");\n    }\n}\n\ncontract B is A {\n    function foo() public virtual override {\n        emit Log("B.foo called");\n        A.foo();\n    }\n\n    function bar() public virtual override {\n        emit Log("B.bar called");\n        super.bar();\n    }\n}\n\ncontract C is A {\n    function foo() public virtual override {\n        emit Log("C.foo called");\n        A.foo();\n    }\n\n    function bar() public virtual override {\n        emit Log("C.bar called");\n        super.bar();\n    }\n}\n\ncontract D is B, C {\n    // Try:\n    // - D.foo()\u3092\u30b3\u30fc\u30eb\u3057\u3066\u7d50\u679c\u3092\u307f\u3066\u307f\u3088\u3046\n    //   D\u304cA\u3001B\u3001C\u3092\u7d99\u627f\u3057\u3066\u3044\u308b\u3051\u3069\u3001C\u3001A\u3060\u3051\u304c\u547c\u3070\u308c\u305f\n    // - D.bar()\u3092\u30b3\u30fc\u30eb\u3057\u3066\u7d50\u679c\u3092\u307f\u3066\u307f\u3088\u3046\n    //   C\u3001B\u3001A\u306e\u9806\u756a\u3067\u547c\u3070\u308c\u305f\n    //   B\u3001C\u306fsuper\u30922\u56de\u547c\u3070\u308c\u305f\u306e\u306b\u3001A\u304c\u547c\u3070\u308c\u305f\u306e\u306f\u4e00\u56de\u3060\u3051\n\n    function foo() public override(B, C) {\n        super.foo();\n    }\n\n    function bar() public override(B, C) {\n        super.bar();\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);