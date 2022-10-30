---
title: 40 ABI decode
author: thurendous, Polymetis
date: October 30th, 2022
keywords: [solidity, abidecode]
description: understand abidecode through solidity code example
tags:
    - solidity
    - abidecode
---

decode は bytes を data へ変換する

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract AbiDecode {
    struct MyStruct {
        string name;
        uint[2] nums;
    }

    // example of arguments:
    // 1
    // 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
    // [1,2]
    // ["x", [1,2]]
    function encode(
        uint x,
        address addr,
        uint[] calldata arr,
        MyStruct calldata myStruct
    ) external pure returns (bytes memory) {
        return abi.encode(x, addr, arr, myStruct);
    }

    // example argumentsを使って生成したdataを入力した場合、そのargumentsを返す
    function decode(bytes calldata data)
        external
        pure
        returns (
            uint x,
            address addr,
            uint[] memory arr,
            MyStruct memory myStruct
        )
    {
        // (uint x, address addr, uint[] memory arr, MyStruct myStruct) = ...
        (x, addr, arr, myStruct) = abi.decode(data, (uint, address, uint[], MyStruct));
    }
}

```

[Remix](https://remix.ethereum.org/)で試す
