"use strict";(self.webpackChunkmy_website_with_docusaurus=self.webpackChunkmy_website_with_docusaurus||[]).push([[6002],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),y=r,p=m["".concat(o,".").concat(y)]||m[y]||d[y]||i;return t?a.createElement(p,s(s({ref:n},l),{},{components:t})):a.createElement(p,s({ref:n},l))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<i;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5112:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const i={title:"5 \u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc(Timelocker)",author:"thurendous, Polymetis",date:"January 1th, 2023",keywords:["solidity","timelock"],description:"solidity ERC1155",tags:["advanced solidity","ERC1155","NFT","FT"]},s=void 0,c={unversionedId:"SolidityAdvanced/Timelock",id:"SolidityAdvanced/Timelock",title:"5 \u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc(Timelocker)",description:"solidity ERC1155",source:"@site/docs/SolidityAdvanced/5_Timelock.md",sourceDirName:"SolidityAdvanced",slug:"/SolidityAdvanced/Timelock",permalink:"/en/docs/SolidityAdvanced/Timelock",draft:!1,editUrl:"https://github.com/thurendous/Omaeno-website/tree/master/docs/SolidityAdvanced/5_Timelock.md",tags:[{label:"advanced solidity",permalink:"/en/docs/tags/advanced-solidity"},{label:"ERC1155",permalink:"/en/docs/tags/erc-1155"},{label:"NFT",permalink:"/en/docs/tags/nft"},{label:"FT",permalink:"/en/docs/tags/ft"}],version:"current",sidebarPosition:5,frontMatter:{title:"5 \u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc(Timelocker)",author:"thurendous, Polymetis",date:"January 1th, 2023",keywords:["solidity","timelock"],description:"solidity ERC1155",tags:["advanced solidity","ERC1155","NFT","FT"]},sidebar:"tutorialSidebar",previous:{title:"4 ERC1155",permalink:"/en/docs/SolidityAdvanced/ERC1155"},next:{title:"Ethers.js",permalink:"/en/docs/category/ethersjs"}},o={},u=[],l={toc:u};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f5c\u3063\u305f\u5f8c\u6c17\u3065\u3044\u305f\u3093\u3067\u3059\u304c\u3001\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u30d3\u30b8\u30cd\u30b9\u30e9\u30a4\u30bb\u30f3\u30b9\u306a\u306e\u3067\u3001\u3082\u3057\u304b\u3057\u3066\u4f7f\u3048\u306a\u3044\u306e\u304b\u3082\u3002\u305f\u3060\u3001\u5927\u4f53\u6642\u52b9\u304c\uff12\u5e74\u9593\u306a\u306e\u3067\u30012018 \u5e74\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u306a\u306e\u304b\u306a\u3068\u3082\u601d\u3046\u306e\u3067\u3001\u4f7f\u3048\u308b\u53ef\u80fd\u6027\u3082\u3042\u308a\u307e\u3059\u3002\u8981\u8abf\u67fb\u3060\u306a\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://qiita.com/0xfffffff7/items/efbb65521d7708f2db7d"},"\u3053\u3061\u3089\u306e\u30b5\u30a4\u30c8"),"\u306b\u3088\u308b\u3068\u3001\u30d3\u30b8\u30cd\u30b9\u306e\u5546\u5229\u7528\u4e0d\u53ef\u3060\u306a\u3002\u53b3\u3057\u3044\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sol"},'// SPDX-License-Identifier: BSD-3-Clause\npragma solidity ^0.8.4;\n\ncontract Timelock{\n    // events\n    // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30ad\u30e3\u30f3\u30bb\u30ebevent\n    event CancelTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint executeTime);\n    // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u5b9f\u884cevent\n    event ExecuteTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature,  bytes data, uint executeTime);\n    // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u4f5c\u6210\u3001\u5217\u306b\u5165\u308c\u308bevent\n    event QueueTransaction(bytes32 indexed txHash, address indexed target, uint value, string signature, bytes data, uint executeTime);\n    // \u7ba1\u7406\u8005\u306e\u30a2\u30c9\u30ec\u30b9\u5909\u66f4event\n    event NewAdmin(address indexed newAdmin);\n\n    // \u72b6\u614b\u5909\u6570(storage)\n    address public admin; // \u7ba1\u7406\u8005\u306e\u30a2\u30c9\u30ec\u30b9\n    uint public constant GRACE_PERIOD = 7 days; // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u6709\u52b9\u671f\u9650\u3001\u671f\u9650\u3092\u3059\u304e\u308b\u3068\u7121\u52b9\u306b\u306a\u308b\n    uint public delay; // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30ed\u30c3\u30af\u671f\u9593\n    mapping (bytes32 => bool) public queuedTransactions; // txHash -> bool\u306e\u3053\u3068\u3001\u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc\u306e\u5217\u306b\u5165\u3063\u3066\u3044\u308b\u5168\u3066\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\n\n    // \u7ba1\u7406\u8005\u9650\u5b9a\u306emodifier\u5b9a\u7fa9\n    modifier onlyOwner() {\n        require(msg.sender == admin, "Timelock: Caller not admin");\n        _;\n    }\n\n    // onlyTimelock modifier\n    modifier onlyTimelock() {\n        require(msg.sender == address(this), "Timelock: Caller not Timelock");\n        _;\n    }\n\n    /**\n     * @dev \u30b3\u30f3\u30b9\u30c8\u30e9\u30af\u30bf\uff0c\u7ba1\u7406\u8005\u30a2\u30c9\u30ec\u30b9\u3001\u30ed\u30c3\u30af\u671f\u9593\u3092\u521d\u671f\u5316\u3059\u308b\n     */\n    constructor(uint delay_) {\n        delay = delay_;\n        admin = msg.sender;\n    }\n\n    /**\n     * @dev \u7ba1\u7406\u8005\u30a2\u30c9\u30ec\u30ec\u30b9\u306e\u5909\u66f4\u3001\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u767a\u884c\u3057\u305f\u306e\u306f\u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u3067\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\n     */\n    function changeAdmin(address newAdmin) public onlyTimelock {\n        admin = newAdmin;\n\n        emit NewAdmin(newAdmin);\n    }\n\n    /**\n     * @dev \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4f5c\u6210\u3057\u3001\u5217\u306b\u5165\u308c\u308b\n     * @param target: \u30bf\u30fc\u30b2\u30c3\u30c8\u306e\u30b3\u30f3\u30c8\u30e9\u30af\u30c8\u30a2\u30c9\u30ec\u30b9\n     * @param value: \u9001\u308b\u30a4\u30fc\u30b5\u306e\u91cf\n     * @param signature: \u547c\u3073\u51fa\u3059\u95a2\u6570\u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u30fc\n     * @param data: call data\uff0c\u5f15\u6570\u306a\u3069\u306e\u60c5\u5831\u304c\u5165\u3063\u3066\u3044\u308b\n     * @param executeTime: \u5b9f\u884c\u3059\u308b\u30d6\u30ed\u30c3\u30af\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\n     *\n     * \u6e80\u305f\u3059\u6761\u4ef6\uff1aexecuteTime \u306f \u73fe\u5728\u306e\u30d6\u30ed\u30c3\u30af\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7 + delay\n     */\n    function queueTransaction(address target, uint256 value, string memory signature, bytes memory data, uint256 executeTime) public onlyOwner returns (bytes32) {\n        // check\uff1a\u5b9f\u884c\u3059\u308b\u6642\u9593\u304c\u4e0a\u8a18\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3057\u3066\u3044\u308b\u3053\u3068\n        require(executeTime >= getBlockTimestamp() + delay, "Timelock::queueTransaction: Estimated execution block must satisfy delay.");\n        // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30cf\u30c3\u30b7\u30e5\u5024\u306e\u8a08\u7b97\n        bytes32 txHash = getTxHash(target, value, signature, data, executeTime);\n        // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4e26\u3076\u5217\u306b\u5165\u308c\u308b\n        queuedTransactions[txHash] = true;\n\n        // event\u3092\u5410\u304f\n        emit QueueTransaction(txHash, target, value, signature, data, executeTime);\n        return txHash;\n    }\n\n    /**\n     * @dev \u7279\u5b9a\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u53d6\u308a\u6d88\u3059\n     *\n     * \u6e80\u305f\u3059\u6761\u4ef6\uff1a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc\u306e\u4e26\u3076\u5217\u306b\u5165\u3063\u3066\u3044\u308b\u3053\u3068\n     */\n    function cancelTransaction(address target, uint256 value, string memory signature, bytes memory data, uint256 executeTime) public onlyOwner{\n        // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u30cf\u30c3\u30b7\u30e5\u5024\u306e\u8a08\u7b97\n        bytes32 txHash = getTxHash(target, value, signature, data, executeTime);\n        // check:\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306f\u30bf\u30a4\u30e0\u30ed\u30c3\u30ab\u30fc\u306e\u4e26\u3076\u5217\u306b\u5165\u3063\u3066\u3044\u308b\u3053\u3068\n        require(queuedTransactions[txHash], "Timelock::cancelTransaction: Transaction hasn\'t been queued.");\n        // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4e26\u3076\u5217\u304b\u3089\u6392\u9664\n        queuedTransactions[txHash] = false;\n\n        // event\u3092\u5410\u304f\n        emit CancelTransaction(txHash, target, value, signature, data, executeTime);\n    }\n\n    /**\n     * @dev \u7279\u5b9a\u306e\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u5b9f\u884c\u3055\u305b\u308b\n     *\n     * \u6e80\u305f\u3059\u6761\u4ef6\uff1a\n     * 1. \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u4e26\u3076\u5217\u306b\u5165\u3063\u3066\u3044\u308b\u3053\u3068\n     * 2. \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u4e8b\u9805\u306e\u671f\u9593\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u3053\u3068\n     * 3. \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u671f\u9650\u304c\u904e\u304e\u3066\u3044\u306a\u3044\u3053\u3068\n     */\n    function executeTransaction(address target, uint256 value, string memory signature, bytes memory data, uint256 executeTime) public payable onlyOwner returns (bytes memory) {\n        bytes32 txHash = getTxHash(target, value, signature, data, executeTime);\n        // check\uff1a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u304c\u4e26\u3076\u5217\u306b\u5165\u3063\u3066\u3044\u308b\u3053\u3068\n        require(queuedTransactions[txHash], "Timelock::executeTransaction: Transaction hasn\'t been queued.");\n        // check\uff1a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u4e8b\u9805\u306e\u671f\u9593\u306e\u6761\u4ef6\u3092\u6e80\u305f\u3059\u3053\u3068\n        require(getBlockTimestamp() >= executeTime, "Timelock::executeTransaction: Transaction hasn\'t surpassed time lock.");\n        // check\uff1a\u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u671f\u9650\u304c\u904e\u304e\u3066\u3044\u306a\u3044\u3053\u3068\n       require(getBlockTimestamp() <= executeTime + GRACE_PERIOD, "Timelock::executeTransaction: Transaction is stale.");\n        // \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u3092\u4e26\u3076\u5217\u304b\u3089\u6392\u9664\n        queuedTransactions[txHash] = false;\n\n        // call\u7528\u306edata\u3092\u53d6\u5f97\n        bytes memory callData;\n        if (bytes(signature).length == 0) {\n            callData = data;\n        } else {\n            // call data\u3092\u4f5c\u6210\u3001\u3059\u3067\u306b\u3042\u308b\u306e\u3092\u4e0a\u66f8\u304d\u3059\u308b\uff08\u95a2\u6570\u306e\u30b7\u30b0\u30cd\u30c1\u30e3\u30fc\u3001\u5f15\u6570\u306a\u3069\u306e\u60c5\u5831\u3092\u5229\u7528\uff09\n            callData = abi.encodePacked(bytes4(keccak256(bytes(signature))), data);\n        }\n        // call\u3092\u4f7f\u3063\u3066\u95a2\u6570\u3092\u547c\u3073\u51fa\u3059\n        (bool success, bytes memory returnData) = target.call{value: value}(callData);\n        require(success, "Timelock::executeTransaction: Transaction execution reverted.");\n\n        // event\u3092\u5410\u304f\n        emit ExecuteTransaction(txHash, target, value, signature, data, executeTime);\n\n        return returnData;\n    }\n\n    /**\n     * @dev \u73fe\u5728\u306e\u30d6\u30ed\u30c3\u30af\u306e\u30bf\u30a4\u30e0\u30b9\u30bf\u30f3\u30d7\u3092\u53d6\u5f97\n     */\n    function getBlockTimestamp() public view returns (uint) {\n        return block.timestamp;\n    }\n\n    /**\n     * @dev \u30c8\u30e9\u30f3\u30b6\u30af\u30b7\u30e7\u30f3\u306e\u30cf\u30c3\u30b7\u30e5\u5024\u306e\u8a08\u7b97\u3092\u3059\u308b\u95a2\u6570\n     */\n    function getTxHash(\n        address target,\n        uint value,\n        string memory signature,\n        bytes memory data,\n        uint executeTime\n    ) public pure returns (bytes32) {\n        return keccak256(abi.encode(target, value, signature, data, executeTime));\n    }\n}\n\n')))}d.isMDXComponent=!0}}]);