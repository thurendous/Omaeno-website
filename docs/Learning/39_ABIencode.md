---
title: 39 ABI encode
author: thurendous, Polymetis
date: October 30th, 2022
keywords: [solidity, abiencode]
description: understand abiencode through solidity code example
tags:
    - solidity
    - abiencode
---

encode は data を bytes に変換する

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface IERC20 {
    function transfer(address, uint) external;
}

contract Token {
    function transfer(address, uint) external {}
}

contract AbiEncode {
    function test(address _contract, bytes calldata data) external {
        (bool success, ) = _contract.call(data);
        require(success, "call failed");
    }

    // 下記3つの関数はdataの作成をしている
    // 引数が同じであれば同じ結果を返す
    // 作成したデータは上記のtest関数のdataとして使える
    // rule: スペースなし、uintはきちんとuint256とかく。そうしないと機能しない
    function encodeWithSignature(address to, uint amount)
        external
        pure
        returns (bytes memory)
    {
        // Typo is not checked - "transfer(address, uint)"
        return abi.encodeWithSignature("transfer(address,uint256)", to, amount);
    }

    function encodeWithSelector(address to, uint amount)
        external
        pure
        returns (bytes memory)
    {
        // Type is not checked - (IERC20.transfer.selector, true, amount)
        return abi.encodeWithSelector(IERC20.transfer.selector, to, amount);
    }

    function encodeCall(address to, uint amount) external pure returns (bytes memory) {
        // Typo and type errors will not compile
        return abi.encodeCall(IERC20.transfer, (to, amount));
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
