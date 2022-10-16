"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[7844],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>v});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),v=o,m=u["".concat(l,".").concat(v)]||u[v]||d[v]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=u;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2615:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(7462),o=(t(7294),t(3905));const a={title:"1 Provider",author:"thurendous",date:"October 11th, 2022",keywords:["ethers.js","provider"],description:"what is provider in etherjs",tags:["basic","ethersjs","provider"]},s=void 0,i={unversionedId:"Ethersjs/Provider/readme",id:"Ethersjs/Provider/readme",title:"1 Provider",description:"what is provider in etherjs",source:"@site/docs/Ethersjs/2_Provider/readme.md",sourceDirName:"Ethersjs/2_Provider",slug:"/Ethersjs/Provider/",permalink:"/docs/Ethersjs/Provider/",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/Ethersjs/2_Provider/readme.md",tags:[{label:"basic",permalink:"/docs/tags/basic"},{label:"ethersjs",permalink:"/docs/tags/ethersjs"},{label:"provider",permalink:"/docs/tags/provider"}],version:"current",frontMatter:{title:"1 Provider",author:"thurendous",date:"October 11th, 2022",keywords:["ethers.js","provider"],description:"what is provider in etherjs",tags:["basic","ethersjs","provider"]},sidebar:"tutorialSidebar",previous:{title:"1 Hello Vitalik",permalink:"/docs/Ethersjs/HelloVitalik/"},next:{title:"How to Use",permalink:"/docs/intro"}},l={},c=[{value:"What is provider",id:"what-is-provider",level:2},{value:"jsonRpcProvider",id:"jsonrpcprovider",level:2}],p={toc:c};function d(e){let{components:r,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u306e\u30dd\u30ea\u30b4\u30f3\u306e\u30ac\u30b9\u4ee3\u304c\u534a\u7aef\u306a\u304f\u9ad8\u304f\u3066\u3001\u4f7f\u3044\u7269\u306b\u306a\u3089\u306a\u3044\u306a\u3068\u5606\u3044\u3066\u3044\u305f\u308a\u3057\u3066\u3044\u307e\u3059\u3002\u6b63\u76f4\u3001\u3053\u308c\u3067\u306f Layer2 \u306e\u307b\u3046\u304c\u5b89\u3044\u3093\u3067\u3059\u3088\u306d\u3002\u305d\u3063\u3061\u3078\u30b7\u30d5\u30c8\u3057\u3066\u3044\u304f\u306e\u304b\u306a\u3063\u3066\u8003\u3048\u3066\u3044\u308b Thurendous \u3067\u3059\u3002"),(0,o.kt)("h1",{id:"provider"},"Provider"),(0,o.kt)("p",null,"\u4eca\u56de\u306f provider \u30af\u30e9\u30b9\u306b\u3064\u3044\u3066\u7d39\u4ecb\u3057\u307e\u3059\u3002\u305d\u308c\u3092\u4f7f\u3063\u3066\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u306e\u60c5\u5831\u3092\u3068\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002"),(0,o.kt)("h2",{id:"what-is-provider"},"What is provider"),(0,o.kt)("p",null,"provider \u3068\u306f\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306b\u304a\u3051\u308b\u62bd\u8c61\u7684\u306a\u30af\u30e9\u30b9\u3002\u6a19\u6e96\u7684\u306a\u30a4\u30fc\u30b5\u30ea\u30a2\u30e0\u30ce\u30fc\u30c9\u306b\u30b7\u30f3\u30d7\u30eb\u3067\u4e00\u8cab\u6027\u306e\u3042\u308b\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u308b\u3002"),(0,o.kt)("p",null,"ethersjs \u306b\u3042\u308b provider \u306f\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u30ad\u30fc\u3068\u95a2\u4fc2\u304c\u306a\u304f\u4f7f\u3048\u307e\u3059\u3002\u8aad\u307f\u8fbc\u307f\u3060\u3051\u3060\u3068\u3001\u66f8\u304d\u8fbc\u307f\u306f\u3067\u304d\u306a\u3044\u3002\u3053\u306e\u70b9\u306b\u95a2\u3057\u3066\u306f web3js \u3088\u308a\u306f\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u304c\u512a\u308c\u3066\u3044\u308b\u3068\u8a00\u3048\u307e\u3059\u3002"),(0,o.kt)("h2",{id:"jsonrpcprovider"},"jsonRpcProvider"),(0,o.kt)("p",null,"\u307e\u305a\u306f\u30ce\u30fc\u30c9\u30d7\u30ed\u30d0\u30a4\u30c0\u30fc\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3078\u884c\u3063\u3066 API Key \u3092\u53d6\u5f97\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\n\u304a\u3059\u3059\u3081\u3057\u305f\u3044\u306e\u306f\u3001Infura \u3084 Alchemy \u306e\u307b\u3046\u306a\u306e\u3067\u3001\u7533\u8acb\u3092\u3057\u3066 \xa0API Key \u3092\u30b2\u30c3\u30c8\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u30b2\u30c3\u30c8\u3057\u305f\u3089.env \u30d5\u30a1\u30a4\u30eb\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u8a18\u8f09\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'polygon_url="https://polygon-mainnet.g.alchemy.com/v2/{\u3042\u306a\u305f\u306e\u30ad\u30fc\u3092\u5165\u308c\u3066}"\n')),(0,o.kt)("p",null,"\u4eca\u56de\u306f dotenv \u3082\u4f7f\u3046\u306e\u3067\u3001\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install dotenv --save\n# \u3042\u308b\u3044\u306f\n$ yarn add dotenv\n")),(0,o.kt)("p",null,"\u305d\u3053\u304b\u3089\u30aa\u30f3\u30c1\u30a7\u30fc\u30f3\u304b\u3089\u60c5\u5831\u3092\u3068\u3063\u3066\u307f\u307e\u3057\u3087\u3046\u3002(comment \u306b\u304a\u3044\u3066\u8272\u3005\u60c5\u5831\u3092\u66f8\u3044\u3066\u3044\u307e\u3059\u306e\u3067\u8aad\u3093\u3067\u307f\u3066\u7406\u89e3\u3057\u3066\u304f\u3060\u3055\u3044\u306d\u3002\u306a\u3093\u304b\u3042\u3063\u305f\u3089 github \u306e discussion \u304b issue \u306b\u3066\u304a\u805e\u304d\u304f\u3060\u3055\u3044\u3002)"),(0,o.kt)("p",null,"\u305d\u308c\u3067\u306f\u3001\u6b21\u56de\u3092\u304a\u697d\u3057\u307f\u306b\uff01\uff01\u3058\u3083\u306d"),(0,o.kt)("p",null,"Have a nice weekend!!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import\ndotenv.config()\nimport ethers from 'ethers'\n\n// 1. \u3068\u3042\u308bnetwork\u306b\u63a5\u7d9a\u3001\u4eca\u56de\u306fpolygon\nconsole.log(`chain\u306b\u63a5\u7d9a\u6e08\u307f\u3001\u3001`)\nconst provider = new ethers.providers.JsonRpcProvider(process.env.polygon_url)\n// polygon_url\u306f\u3042\u306a\u305f\u81ea\u8eab\u306e\u3042\u30c9\u30ec\u30b9\u306b\u3057\u3066\u306d\n\n// 2. \u3068\u3042\u308b\u30a2\u30ab\u30a6\u30f3\u30c8\u306ebalance\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b\nconsole.log('\\n2. balance\u3092\u30c1\u30a7\u30c3\u30af\u3059\u308b')\n// \u3068\u3042\u308b\u30a2\u30c9\u30ec\u30b9\nconst balance = await provider.getBalance(\n    '0xeC20607aa654D823DD01BEB8780a44863c57Ed07'\n)\n// bigNumber\u3068\u3057\u3066\u8fd4\u3055\u308c\u308b\u306e\u3067\u3001ethers\u306eutils\u3092\u4f7f\u3063\u3066\u5909\u63db\nconsole.log(ethers.utils.formatEther(balance))\n\n// 3. \u30c1\u30a7\u30fc\u30f3\u3092\u78ba\u8a8d\u3059\u308b\nconsole.log('\\n3. \u30c1\u30a7\u30fc\u30f3\u3092\u78ba\u8a8d\u3059\u308b')\nconst network = await provider.getNetwork()\nconsole.log(network)\nconsole.log(`\u73fe\u5728\u306e\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u306f${network.name}\u3060\u3088`)\n\n// 4.\u30d6\u30ed\u30c3\u30af\u306e\u9ad8\u3055\u3092\u30c1\u30a7\u30c3\u30af\nconsole.log('\\n4. \u30d6\u30ed\u30c3\u30af\u306e\u9ad8\u3055\u3092\u30c1\u30a7\u30c3\u30af')\nconst blockNumber = await provider.getBlockNumber()\nconsole.log(blockNumber)\n\n// 5. \u4eca\u30c1\u30a7\u30fc\u30f3\u306egas price\u3092\u30c1\u30a7\u30c3\u30af\nconsole.log('\\n5. \u4eca\u306egas price\u3092\u30c1\u30a7\u30c3\u30af')\nconst gasPrice = await provider.getGasPrice()\nconsole.log(ethers.utils.formatEther(gasPrice))\n\n// 6. \u73fe\u5728\u306e\u30ac\u30b9\u4ee3\u306e\u8a2d\u5b9a\u3092\u30c1\u30a7\u30c3\u30af\nconsole.log('\\n6. \u73fe\u5728\u306e\u30ac\u30b9\u4ee3\u306e\u8a2d\u5b9a\u3092\u30c1\u30a7\u30c3\u30af')\nconst feeData = await provider.getFeeData()\nconsole.log(feeData)\n\n// \u898b\u306b\u304f\u3044\u306e\u3067\u308f\u304b\u308a\u3084\u3059\u304410\u9032\u6570\u306b\u3057\u305f\nconsole.log(\n    `gas price: ${ethers.utils.formatEther(feeData.gasPrice.toString())}`\n)\nconsole.log(\n    `max priority fee: ${ethers.utils.formatEther(\n        feeData.maxPriorityFeePerGas.toString()\n    )}`\n)\n\n// 7. \u30b8\u30a7\u30cd\u30b7\u30b9\u306e\u30d6\u30ed\u30c3\u30af\u306e\u60c5\u5831\u3092\u30c1\u30a7\u30c3\u30af\nconsole.log('\\n7. \u30bc\u30ed\u756a\u306e\u30d6\u30ed\u30c3\u30af\u306e\u60c5\u5831\u3092\u30c1\u30a7\u30c3\u30af')\nconst block = await provider.getBlock(0)\nconsole.log(block)\n\n// 8. \u3068\u3042\u308b\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3092\u307f\u308b\n// \u4eca\u56de\u306fJPYC\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\nconsole.log('\\n8. \u3068\u3042\u308b\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306e\u30d0\u30a4\u30c8\u30b3\u30fc\u30c9\u3092\u307f\u308b')\nlet code = await provider.getCode('0x431D5dfF03120AFA4bDf332c61A6e1766eF37BDB')\nconsole.log(`-----proxy----- `)\nconsole.log(code)\ncode = await provider.getCode('0xf2fAb05F26Dc8da5A3F24D015FB043DB7a8751Cf')\nconsole.log(`-----implementation----- `)\nconsole.log(code)\n")),(0,o.kt)("p",null,"\u6700\u5f8c\u306b\u3001\u3053\u3093\u306a\u611f\u3058\u306b\u306a\u308c\u3070\u3001\u53d6\u308c\u3066\u308b\u3063\u3066\u3053\u3068\u3067 OK \u3067\u3059\u3088\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(6212).Z,width:"1522",height:"1434"})))}d.isMDXComponent=!0},6212:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/providersTerminalScreenshot-485de9e602a26938ed3ab4005462705a.png"}}]);