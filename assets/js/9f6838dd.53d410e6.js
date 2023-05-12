"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[3675],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=i(n),k=l,m=s["".concat(u,".").concat(k)]||s[k]||d[k]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,p=new Array(a);p[0]=s;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,p[1]=o;for(var i=2;i<a;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},4274:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=n(7462),l=(n(7294),n(3905));const a={slug:"EVM-deep-dive-part1",title:"EVM \u30c7\u30a3\u30fc\u30d7\u30c0\u30a4\u30d6 - super coder \u3078\u306e\u9053 \ud83e\udd77 \ud83d\udcbbPart 1",authors:["Thurendous"],blogDescription:"EVM \u30c7\u30a3\u30fc\u30d7\u30c0\u30a4\u30d6 - super coder \u3078\u306e\u9053 \ud83e\udd77 \ud83d\udcbbPart 1",tags:["EVM","opcode","Etheruem","blockchain","examples"]},p=void 0,o={permalink:"/blog/EVM-deep-dive-part1",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/EVM-deep-dive-part1/2023-2-26-EVM-deep-dive-part1.md",source:"@site/blog/EVM-deep-dive-part1/2023-2-26-EVM-deep-dive-part1.md",title:"EVM \u30c7\u30a3\u30fc\u30d7\u30c0\u30a4\u30d6 - super coder \u3078\u306e\u9053 \ud83e\udd77 \ud83d\udcbbPart 1",description:"Hi Hi, nerver give up!",date:"2023-02-26T00:00:00.000Z",formattedDate:"2023\u5e742\u670826\u65e5",tags:[{label:"EVM",permalink:"/blog/tags/evm"},{label:"opcode",permalink:"/blog/tags/opcode"},{label:"Etheruem",permalink:"/blog/tags/etheruem"},{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"examples",permalink:"/blog/tags/examples"}],readingTime:3.74,hasTruncateMarker:!1,authors:[{name:"Thurendous",title:"Think borderlessly",url:"https://github.com/thurendous",imageURL:"https://github.com/thurendous.png",key:"Thurendous"}],frontMatter:{slug:"EVM-deep-dive-part1",title:"EVM \u30c7\u30a3\u30fc\u30d7\u30c0\u30a4\u30d6 - super coder \u3078\u306e\u9053 \ud83e\udd77 \ud83d\udcbbPart 1",authors:["Thurendous"],blogDescription:"EVM \u30c7\u30a3\u30fc\u30d7\u30c0\u30a4\u30d6 - super coder \u3078\u306e\u9053 \ud83e\udd77 \ud83d\udcbbPart 1",tags:["EVM","opcode","Etheruem","blockchain","examples"]},prevItem:{title:"EVM \u30c7\u30a3\u30fc\u30d7\u30c0\u30a4\u30d6 - super coder \u3078\u306e\u9053 \ud83e\udd77 \ud83d\udcbbPart 2",permalink:"/blog/EVM-deep-dive-part2"},nextItem:{title:"CEI\u3068\u306f : Checks Effects Interactions",permalink:"/blog/checks-effects-interactions"}},u={authorsImageUrls:[void 0]},i=[{value:"\u57fa\u790e\uff1aSolidity \u2192 Bytecode \u2192 Opcode",id:"\u57fa\u790esolidity--bytecode--opcode",level:2},{value:"1_Storage.sol \u30b3\u30f3\u30c8\u30e9\u30af\u30c8",id:"1_storagesol-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8",level:2},{value:"\u30b9\u30de\u30b3\u30f3\u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u3084 Calldata",id:"\u30b9\u30de\u30b3\u30f3\u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u3084-calldata",level:2},{value:"\u30aa\u30da\u30b3\u30fc\u30c9\uff06\u30b9\u30bf\u30c3\u30af",id:"\u30aa\u30da\u30b3\u30fc\u30c9\u30b9\u30bf\u30c3\u30af",level:2},{value:"Reference",id:"reference",level:2}],c={toc:i};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Hi Hi, nerver give up!"),(0,l.kt)("p",null,"First Principle \u3068\u3044\u3046\u8a00\u8449\u3092\u8033\u306b\u3055\u308c\u305f\u3053\u3068\u306f\u306a\u3044\u3060\u308d\u3046\u304b\u3002\u305d\u308c\u306f\u5965\u6df1\u304f\u7269\u4e8b\u306e\u57fa\u790e\u3092\u7406\u89e3\u3057\u305f\u4e0a\u3067\u3001\u3088\u308a\u3088\u3044\u767a\u60f3\u3092\u751f\u307e\u308c\u308b\u3053\u3068\u3068\u3044\u3046\u6982\u5ff5\u3060\u3002"),(0,l.kt)("p",null,"\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u4e16\u754c\u3067\u306f\u3001EVM \u3068\u305d\u306e\u5468\u308a\u306b\u3042\u308b\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u3001\u30c7\u30fc\u30bf\u69cb\u9020\u306b\u95a2\u3057\u3066\u306f\u3001\u307e\u3055\u306b\u3053\u306e First Principle \u3067\u3042\u308b\u3002Solidity \u3042\u308b\u3044\u306f\u30b9\u30de\u30fc\u30c8\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306f\u3053\u306e\u57fa\u790e\u306e\u4e0a\u306b\u4f5c\u308b\u69cb\u9020\u7269\u306a\u306e\u3067\u3001EVM \u306e\u3053\u3068\u3092\u7406\u89e3\u305b\u305a\u306b\u306f\u3088\u3044 solidity dev \u3068\u79f0\u3059\u308b\u306b\u306f\u307e\u3060\u65e9\u3044\u3068\u8a00\u3063\u3066\u3088\u3044\u3060\u308d\u3046\u3002"),(0,l.kt)("h2",{id:"\u57fa\u790esolidity--bytecode--opcode"},"\u57fa\u790e\uff1aSolidity \u2192 Bytecode \u2192 Opcode"),(0,l.kt)("p",null,"\u307e\u305a\u3001\u57fa\u790e\u7684\u306a\u90e8\u5206\u306b\u3064\u3044\u3066\u4e00\u5b9a\u7a0b\u5ea6\u306e\u77e5\u8b58\u3092\u6709\u3059\u308b\u3053\u3068\u3092\u524d\u63d0\u3068\u3057\u3066\u3044\u308b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u304a\u3055\u3089\u3044\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Bytecode & ABI: \u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3068\u306f EVM \u4e0a\u3067\u5b9f\u884c\u53ef\u80fd\u306a\u30b3\u30fc\u30c9\u3067\u3001ABI \u3068\u306f\u3053\u306e EVM \u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3068\u3084\u308a\u53d6\u308a\u304c\u3067\u304d\u308b\u305f\u3081\u306e interface\u3002"),(0,l.kt)("li",{parentName:"ul"},"Solidity \u30b3\u30fc\u30c9\u306f\u307e\u305a\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3078\u30b3\u30f3\u30d1\u30a4\u30eb\u3057\u3066\u304b\u3089\u3001\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u30d6\u30ed\u30c3\u30af\u30c1\u30a7\u30fc\u30f3\u3078\u4e57\u305b\u308b\u3068\u3044\u3046\u6d41\u308c\u306b\u306a\u308b\u3002\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306f\u5b9f\u306f\u8272\u3005\u306a\u30aa\u30da\u30b3\u30fc\u30c9\u3092\u610f\u5473\u3057\u3066\u3044\u308b\u3002")))),(0,l.kt)("p",null,"\u4eca\u56de\u306f\u57fa\u672c\u7684\u306a solidity \u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u3064\u3044\u3066\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306e\u4e00\u90e8\u3092\u4e00\u7dd2\u306b\u307f\u3066\u3044\u304d\u3001EVM \u304c\u3069\u306e\u3088\u3046\u306b\u95a2\u6570\u3092\u9078\u3093\u3067\u3044\u308b\u304b\u3092\u898b\u3088\u3046\u3002"),(0,l.kt)("p",null,"\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306f\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u304b\u3089\u30b3\u30f3\u30d1\u30a4\u30eb\u3055\u308c\u305f\u3082\u306e\u3067\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u306f\u3044\u304f\u3064\u304b\u3082\u306e\u95a2\u6570\u304c\u3042\u308b\u3060\u308d\u3046\u3002"),(0,l.kt)("p",null,"\u3088\u304f\u3042\u308b\u8cea\u554f\u306f\u3001\u30c7\u30d7\u30ed\u30a4\u3057\u305f\u5f8c\u3001EVM \u306f\u3069\u306e\u3088\u3046\u306b\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306e\u3069\u306e\u90e8\u5206\u3092\u5b9f\u884c\u3059\u3079\u304d\u304b\u304c\u308f\u304b\u3063\u305f\u306e\u304b\u3068\u3044\u3046\u306e\u304c\u3042\u308b\u3002"),(0,l.kt)("h2",{id:"1_storagesol-\u30b3\u30f3\u30c8\u30e9\u30af\u30c8"},"1_Storage.sol \u30b3\u30f3\u30c8\u30e9\u30af\u30c8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma solidity >=0.7.0 <0.9.0;\n\ncontract Storage {\n    uint256 number;\n\n    function store(uint256 num) public {\n        number = num;\n    }\n\n    function retrieve() public view returns (uint256) {\n        return number;\n    }\n}\n")),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306f\u4e0a\u8a18\u306e\u3082\u306e\u3068\u306a\u308b\u3002\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306b\u306f\u4e8c\u500b\u306e\u95a2\u6570\u304c\u3042\u308b\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"store()"),"\u3068 ",(0,l.kt)("inlineCode",{parentName:"p"},"retrieve()"),"\u3002"),(0,l.kt)("p",null,"runtime \u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306f\u4ee5\u4e0b\u306e\u901a\u308a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"608060405234801561001057600080fd5b50600436106100365760003560e01c80632e64cec11461003b5780636057361d14610059575b600080fd5b610043610075565b60405161005091906100d9565b60405180910390f35b610073600480360381019061006e919061009d565b61007e565b005b60008054905090565b8060008190555050565b60008135905061009781610103565b92915050565b6000602082840312156100b3576100b26100fe565b5b60006100c184828501610088565b91505092915050565b6100d3816100f4565b82525050565b60006020820190506100ee60008301846100ca565b92915050565b6000819050919050565b600080fd5b61010c816100f4565b811461011757600080fd5b5056fea2646970667358221220404e37f487a89a932dca5e77faaf6ca2de3b991f93d230604b1b8daaef64766264736f6c63430008070033\n")),(0,l.kt)("p",null,"\u4eca\u56de\u30d5\u30a9\u30fc\u30ab\u30b9\u3059\u308b\u306e\u306f\u4ee5\u4e0b\u306e\u90e8\u5206\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"60003560e01c80632e64cec11461003b5780636057361d1461005957\n")),(0,l.kt)("p",null,"\u3053\u306e\u90e8\u5206\u306f\u5168\u4f53\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u304b\u3089\u629c\u304d\u53d6\u3063\u305f\u3082\u306e\u3002"),(0,l.kt)("p",null,"\u95a2\u6570\u306e\u30bb\u30ec\u30af\u30bf\u306e\u30ed\u30b8\u30c3\u30af\u304c\u542b\u307e\u308c\u3066\u3044\u308b\u3002"),(0,l.kt)("p",null,"\u8a00\u3044\u9045\u308c\u305f\u304c\u3001EVM \u306e\u30aa\u30da\u30b3\u30fc\u30c9\u306b\u95a2\u3057\u3066\u306f\u3001",(0,l.kt)("a",{parentName:"p",href:"https://www.ethervm.io/"},"\u3053\u3053"),"\u304b\u3089\u78ba\u8a8d\u3067\u304d\u308b\u3002"),(0,l.kt)("p",null,"\u30aa\u30da\u30b3\u30fc\u30c9\u306f 1 byte \u306e\u9577\u3055\u306b\u306a\u308b\u3002\u305d\u3046\u3059\u308b\u3068\u81ea\u7136\u306b 256 \u30d1\u30bf\u30fc\u30f3\u304c\u3042\u308b\u3068\u5206\u308b\u3068\u601d\u3046\u3002"),(0,l.kt)("p",null,"\u3057\u304b\u3057\u3001\u5b9f\u969b\u306b\u306f 140 \u5b50\u306e\u30aa\u30da\u30b3\u30fc\u30c9\u3057\u304b\u5b58\u5728\u3057\u306a\u3044\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u306f\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3092\u95a2\u4fc2\u3059\u308b\u30aa\u30da\u30b3\u30fc\u30c9\u3078\u5909\u63db\u3057\u305f\u3082\u306e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"60 00                       =   PUSH1 0x00\n35                          =   CALLDATALOAD\n60 e0                       =   PUSH1 0xe0\n1c                          =   SHR\n80                          =   DUP1\n63 2e64cec1                 =   PUSH4 0x2e64cec1\n14                          =   EQ\n61 003b                     =   PUSH2 0x003b\n57                          =   JUMPI\n80                          =   DUP1\n63 6057361d                 =   PUSH4 0x6057361d\n14                          =   EQ\n61 0059                     =   PUSH2 0x0059\n57                          =   JUMPI\n")),(0,l.kt)("h2",{id:"\u30b9\u30de\u30b3\u30f3\u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u3084-calldata"},"\u30b9\u30de\u30b3\u30f3\u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u3084 Calldata"),(0,l.kt)("p",null,"\u30aa\u30da\u30b3\u30fc\u30c9\u3078\u30c0\u30a4\u30d6\u3059\u308b\u524d\u306b\u3001\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u306b\u3064\u3044\u3066\u5fa9\u7fd2\u3057\u3088\u3046\u3002"),(0,l.kt)("p",null,"\u95a2\u6570\u306e\u547c\u3073\u51fa\u3057\u306e\u524d\u306b\u3001calldata \u306b\u3001\u95a2\u6570\u306e\u7f72\u540d\u3001\u305d\u3057\u3066\u7d9a\u3044\u3066\u5f15\u6570\u3082\u5165\u308c\u308b\u3002"),(0,l.kt)("p",null,"Solidity \u306e\u30b3\u30fc\u30c9\u306b\u8868\u73fe\u3057\u3066\u3082\u3089\u3046\u3068\u3001\u3053\u3046\u306a\u308b\u3060\u308d\u3046\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event FunctionCalldata(bytes);\nbytes memory functionCalldata = abi.encodeWithSignature('store(uint256)', 10);\nemit FunctionCalldata(functionCalldata);\naddress(storageContract).call(functionCalldata);\n")),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u5834\u5408\u3001\u50d5\u306f store \u95a2\u6570\u3092\u547c\u3073\u300110 \u5f15\u6570\u3068\u3057\u3066\u4ee3\u5165\u3057\u305f\u3044\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"0x6057361d000000000000000000000000000000000000000000000000000000000000000a\n")),(0,l.kt)("p",null,"\u4e0a\u306e\u9577\u3044\u6570\u5b57\u306e\u914d\u5217\u306f abi.encodeWithSignature(\u201dstore(uint256)\u201d,10)\u306e\u7d50\u679c\u3002"),(0,l.kt)("p",null,"\u95a2\u6570\u30b7\u30b0\u30cd\u30c1\u30e3\u30fc\u306f\uff14\u30d0\u30a4\u30c8\u306e Keccak \u30cf\u30c3\u30b7\u30e5\u5024\u306b\u3088\u3063\u3066\u5b9a\u7fa9\u3055\u308c\u3066\u3044\u308b\u300c0x6057361d\u300d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"keccak256(\u201cstore(uint256)\u201d) \u2192  first 4 bytes = 6057361d\n\nkeccak256(\u201cretrieve()\u201d) \u2192 first 4 bytes = 2e64cec1\n")),(0,l.kt)("p",null,"\u5148\u7a0b\u306e calldata \u3092\u898b\u308b\u3068\u3001\u5168\u90e8\u3067 36bytes \u3042\u3063\u305f\u3002\u6700\u521d\u306e 4bytes: ",(0,l.kt)("inlineCode",{parentName:"p"},"6057361d"),"\u306f\u95a2\u6570\u306e\u30bb\u30ec\u30af\u30bf\u95a2\u9023\u3067\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"store(uint256)"),"\u3068\u95a2\u4fc2\u3059\u308b\u3002"),(0,l.kt)("p",null,"\u3054\u81ea\u8eab\u3067\u306f\u30c3\u30b7\u30e5\u3057\u3066\u307f\u3066 \u2192",(0,l.kt)("a",{parentName:"p",href:"https://emn178.github.io/online-tools/keccak_256.html"},"\u3053\u3053")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"6057361d = function signature (4 bytes)\n\n000000000000000000000000000000000000000000000000000000000000000a = uint256 input (32 bytes)\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u3001calldata \u306e\u6e96\u5099\u3060\u3063\u305f\u3002"),(0,l.kt)("h2",{id:"\u30aa\u30da\u30b3\u30fc\u30c9\u30b9\u30bf\u30c3\u30af"},"\u30aa\u30da\u30b3\u30fc\u30c9\uff06\u30b9\u30bf\u30c3\u30af"),(0,l.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001EVM \u30ec\u30d9\u30eb\u3078\u30c0\u30a4\u30d6\u3057\u3066\u3044\u3053\u3046\u3002\u30b9\u30bf\u30c3\u30af\u306b\u3064\u3044\u3066\u7406\u89e3\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308b\u3002\u308f\u304b\u3089\u306a\u3044\u5834\u5408\u306f",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=FNZ5o9S9prU"},"\u3053\u308c"),"\u3092\u898b\u3066\u3002"),(0,l.kt)("p",null,"\u5148\u7a0b\u306e\u30aa\u30da\u30b3\u30fc\u30c9\u306f\u3053\u308c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"60 00                       =   PUSH1 0x00\n35                          =   CALLDATALOAD\n60 e0                       =   PUSH1 0xe0\n1c                          =   SHR\n80                          =   DUP1\n63 2e64cec1                 =   PUSH4 0x2e64cec1\n14                          =   EQ\n61 003b                     =   PUSH2 0x003b\n57                          =   JUMPI\n80                          =   DUP1\n63 6057361d                 =   PUSH4 0x6057361d\n14                          =   EQ\n61 0059                     =   PUSH2 0x0059\n57                          =   JUMPI\n")),(0,l.kt)("p",null,"PUSH1 \u306f 1byte \u306e\u30c7\u30fc\u30bf\u3092\u30b9\u30bf\u30c3\u30af\u3078\u5165\u308c\u308b\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u3002\u305d\u3046\u3059\u308b\u3068\u3001\u30b9\u30bf\u30c3\u30af\u306f\u3053\u3046\u306a\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUSH1 0x00    | 0 |\n")),(0,l.kt)("p",null,"\u7d9a\u3044\u3066 CALLDATALOAD \u306f\u6700\u521d\u306e stack(0)\u306e\u5024\u3092\u30dd\u30c3\u30d7\u3055\u305b\u308b\u3002\u3053\u306e 0 \u5024\u3092 input \u3068\u3057\u3066\u4f7f\u7528\u3057\u3001offset \u3068\u3057\u3066\u4f7f\u3046\u3002\u30b9\u30bf\u30c3\u30af\u30a2\u30a4\u30c6\u30e0\u306e\u30b5\u30a4\u30ba\u306f 32bytes \u306a\u306e\u306b\u5bfe\u3057\u3001\u4eca\u56de\u306e calldata \u306f 36bytes \u306b\u306a\u3063\u3066\u3044\u308b\u3002\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u5024\u306f msg.data","[i : i+32]","\u3067\u3001i \u306f\u4eca\u56de\u306e input \u5024\u3068\u306a\u308b\u3002\u3053\u308c\u306f\u6bce\u56de\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u5024\u304c 32bytes \u306b\u306a\u308b\u3053\u3068\u3092\u4fdd\u8a3c\u3067\u304d\u308b\u3002\u540c\u6642\u306b\u3001\u3069\u306e\u90e8\u5206\u306b\u3082\u30a2\u30af\u30bb\u30eb\u3067\u304d\u308b\u3002"),(0,l.kt)("p",null,"\u4eca\u56de\u306e\u5834\u5408\u3001offset \u306f\u306a\u304b\u3063\u305f\u306e\u3067\u300132bytes \u306e calldata \u306e\u5024\u3092\u30b9\u30bf\u30c3\u30af\u306b push \u3057\u305f\u3002\u3055\u304d\u307b\u3069\u7528\u610f\u3057\u305f calldata \u306f\u3053\u308c\u3002\u3084\u3063\u3068\u51fa\u756a\u304c\u304d\u305f\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"0x6057361d000000000000000000000000000000000000000000000000000000000000000a"),"\u3002"),(0,l.kt)("p",null,"\u3068\u3044\u3046\u306e\u306f\u3001\u6700\u5f8c\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"0000000a"),"\u304c\u9664\u5916\u3055\u308c\u305f 32bytes \u304c\u4eca\u56de\u306e\u5165\u529b\u3068\u306a\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"CALLDATALOAD    | 0x6057361d0...00 |\n")),(0,l.kt)("p",null,"\u6b21\u306b PUSH1 \u3092\u4f7f\u3063\u3066 hex value \u306e 0xe0 \u3092\u30b9\u30bf\u30c3\u30af\u306b\u5165\u308c\u308b\u3002\u3053\u308c\u306f\u5341\u9032\u6570\u3060\u3068 224\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUSH1 0xe0      |       224        |\n                | 0x6057361d0...00 |\n")),(0,l.kt)("p",null,"SHR \u3092\u4f7f\u3063\u3066\u30e9\u30a4\u30c8\u30b7\u30d5\u30c8\u3055\u305b\u308b\u3002\u4eca\u56de\u306f\u6700\u521d\u306e\u30a2\u30a4\u30c6\u30e0\u3067\u3042\u308b 224 \u3092\u53d6\u308a\u51fa\u3057\u3001input \u3068\u3057\u3066\u6271\u3046\u3002\u30b9\u30bf\u30c3\u30af\u306b\u3042\u308b\u4e8c\u756a\u76ee\u306e\u30a2\u30a4\u30c6\u30e0\u3092\u3069\u308c\u304f\u3089\u3044\u53f3\u3078\u30e9\u30a4\u30c8\u30b7\u30d5\u30c8\u3055\u305b\u308b\u304b\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u308b\u3002256 - 244 = 32 bit \u3068\u308f\u304b\u308b\u3088\u3046\u306b\u3001\u6700\u5f8c\u306b\u306f 4bytes \u306e\u30bb\u30ec\u30af\u30bf\u304c call stack \u306b\u6b8b\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SHR    | 0x6057361d |\n")),(0,l.kt)("p",null,"DUP1 \u3092\u4f7f\u3063\u3066\u30b9\u30bf\u30c3\u30af\u306e\u4e00\u756a\u4e0a\u306e\u5024\u3092\u30b3\u30d4\u30fc\u3059\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DUP1    | 0x6057361d |\n        | 0x6057361d |\n")),(0,l.kt)("p",null,"PUSH4 \u3092\u4f7f\u3063\u3066 4byte \u306e\u95a2\u6570\u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u30fc\u306e",(0,l.kt)("inlineCode",{parentName:"p"},"retrieve()")," (0x2e64cec1) \u3092\u30b9\u30bf\u30c3\u30af\u306b\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUSH4 0x2e64cec1    | 0x2e64cec1 |\n                    | 0x6057361d |\n                    | 0x6057361d |\n")),(0,l.kt)("p",null,"EQ \u306f\u4e8c\u500b\u306e\u5024\u3092\u30b9\u30bf\u30c3\u30af\u304b\u3089\u51fa\u3057\u3001\u30a4\u30b3\u30fc\u30eb\u306a\u306e\u304b\u3069\u3046\u304b\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\u3002\u3082\u3057\u30a4\u30b3\u30fc\u30eb\u306a\u3089 1\uff08true\uff09 \u3092\u30b9\u30bf\u30c3\u30af\u306b\u30d7\u30c3\u30b7\u30e5\u3001\u305d\u3046\u3067\u306a\u3044\u5834\u5408\u306f 0\uff08false\uff09 \u3092\u30d7\u30c3\u30b7\u30e5\u3059\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"EQ          |      0     |\n            | 0x6057361d |\n")),(0,l.kt)("p",null,"\u6b21\u306b PUSH2 \u3092\u4f7f\u3063\u3066\u4e8c\u500b\u306e\u5024\u3092\u30d7\u30c3\u30b7\u30e5\u3002\uff080x003b, \u5341\u9032\u6570\u3060\u3068 59\uff09"),(0,l.kt)("p",null,"\u3053\u3053\u3067\u306f\u300159 \u304c\u51fa\u305f\u306e\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u30ab\u30a6\u30f3\u30bf\u30fc\u304c\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306b\u6b21\u306e\u5b9f\u884c\u30b3\u30de\u30f3\u30c9\u306f\u3069\u3053\u306b\u3042\u308b\u306e\u304b\u3092\u78ba\u8a8d\u3057\u3066\u3044\u308b\u304b\u3089\u3002\u3053\u306e 59 \u306f retrieve()\u304c\u30b9\u30bf\u30fc\u30c8\u5730\u70b9\u306f 59 \u3092\u610f\u5473\u3057\u3066\u3044\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUSH2 0x003b    |     59     |\n                |      0     |\n                | 0x6057361d |\n")),(0,l.kt)("p",null,"JUMPI \u306f\u201djump if\u201d\u3092\u610f\u5473\u3059\u308b\u3002\u4e8c\u500b\u306e\u5024\u3092\u30dd\u30c3\u30d7\u3055\u305b\u3001\u4e00\u500b\u76ee\u306e\u5024\u306f 59 \u3067\u3001\u4e8c\u500b\u76ee\u306f 0\u3002\u4e8c\u500b\u76ee\u306e\u5024\u306f bool \u5024\u3067\u3053\u306e jump \u3092\u5b9f\u884c\u3059\u3079\u304d\u304b\u3092\u78ba\u5b9a\u3057\u3066\u3044\u308b\u30021 = true, 0 = false\u3002"),(0,l.kt)("p",null,"\u3082\u3057 true \u306e\u5834\u5408\u3001\u30d7\u30ed\u30b0\u30e9\u30e0\u30ab\u30a6\u30f3\u30bf\u30fc\u306f\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3055\u308c\u5b9f\u884c\u306f\u305d\u3061\u3089\u3078 jump \u3059\u308b\u3002\u4eca\u56de\u306f false \u306a\u306e\u3067\u3001\u30b9\u30ad\u30c3\u30d7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"JUMPI    | 0x6057361d |\n")),(0,l.kt)("p",null,"DUP1 again"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DUP1    | 0x6057361d |\n        | 0x6057361d |\n")),(0,l.kt)("p",null,"PUSH4 \u306f 4byte \u306e\u5024\u3092\u30b9\u30bf\u30c3\u30af\u306b\u30d7\u30c3\u30b7\u30e5\u3059\u308b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUSH4 0x6057361d    | 0x6057361d |\n                    | 0x6057361d |\n                    | 0x6057361d |\n")),(0,l.kt)("p",null,"\u307e\u305f EQ \u3057\u3066\u3001\u4eca\u56de\u306f true \u306a\u306e\u3067\u3002\u30b7\u30b0\u30cd\u30c1\u30e3\u30fc\u304c\u5408\u3063\u305f\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"EQ    |      1     |\n      | 0x6057361d |\n")),(0,l.kt)("p",null,"JUMPI\u3001\u4eca\u56de\u306f true \u306a\u3093\u3067 jump \u3092\u5b9f\u884c\u3059\u308b\u3002\u30d7\u30ed\u30b0\u30e9\u30e0\u30ab\u30a6\u30f3\u30bf\u30fc\u306f 89 \u3067\u3001\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u306e\u9055\u3046\u5834\u6240\u3078\u79fb\u52d5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUSH2 0x0059    |     89     |\n                |      1     |\n                | 0x6057361d |\n")),(0,l.kt)("p",null,"\u3053\u306e\u5834\u6240\u306b JUMPDEST \u30aa\u30da\u30b3\u30fc\u30c9\u304c\u3042\u308b\u3002\u3053\u308c\u304c\u306a\u3044\u3068\u5931\u6557\u3059\u308b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"JUMPI    | 0x6057361d |\n")),(0,l.kt)("p",null,"\u305d\u3053\u3067\u7d42\u308f\u308a\u3002\u3053\u308c\u3067\u30aa\u30da\u30b3\u30fc\u30c9\u306e\u5b9f\u884c\u306f",(0,l.kt)("inlineCode",{parentName:"p"},"store(uint156)"),"\u306e\u5834\u6240\u3078\u79fb\u52d5\u3067\u304d\u305f\u3002"),(0,l.kt)("p",null,"\u4eca\u56de\u306f\u4e8c\u500b\u306e\u95a2\u6570\u3057\u304b\u306a\u3044\u3082\u306e\u306e\u3001\u305f\u3068\u3048 20 \u500b\u306e\u95a2\u6570\u304c\u3042\u3063\u305f\u3068\u3057\u3066\u3082\u3001\u30d7\u30ed\u30bb\u30b9\u306f\u4e00\u7dd2\u3002"),(0,l.kt)("p",null,"\u3053\u306e",(0,l.kt)("a",{parentName:"p",href:"https://www.evm.codes/playground?unit=Wei&callData=0x6057361d000000000000000000000000000000000000000000000000000000000000000a&codeType=Mnemonic&code=%27%210%7E0KCALLDATALOAD%7E2z2qw%21E0%7E3KSHR%7E5z2qwDUP1%7E6%28X4_2E64CEC1%7E7KEQ%7E12z5qwX2_3B%7E13%28*I%7E16z3qwDUP1%7E17KX4_6057361D%7E18KEQ%7E23z5qwX2_59%7E24K*I%7E27z3qwkY+wX30_0%7E28KwZGV59z31q%211%7E60+%7BG%7DW%7DKwkYwX26_0%7E62z2qKZstore%7Buint256V89z27q%210+ZContinueW.KK%27%7E+ZOffset+z+%7Bprevious+instruFoccupies+w%5Cnq%29s%7DwkZThes-ar-just+paddingNenabl-usNgetN_+0xZ%2F%2F+Yprogram+counter+59+%26+89XPUSHW+funFexecution...V%7D%29codew*DEST%7EN+to%28wwGretrieve%7BFction+-e+*JUMP%29+byte%28+K%21X1_%01%21%28%29*-FGKNVWXYZ_kqwz%7E_&fork=merge"},"\u30ea\u30f3\u30af"),"\u306f\u975e\u5e38\u306b\u304a\u3059\u3059\u3081\u3002\u89e6\u3063\u3066\u307f\u308b\u3068\u5409\u3002"),(0,l.kt)("p",null,"EVM \u306e\u30b9\u30bf\u30c3\u30af\u30fb\u30e1\u30e2\u30ea\u30fb\u30b9\u30c8\u30ec\u30fc\u30b8\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3057\u3066\u304f\u308c\u308b\u3002"),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy"},"EVM Deep Dives: The Path to Shadowy Super Coder \ud83e\udd77 \ud83d\udcbb - Part 1")))}d.isMDXComponent=!0}}]);