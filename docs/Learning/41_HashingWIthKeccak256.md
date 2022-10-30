---
title: 41 Hashing With Keccak256
author: thurendous, Polymetis
date: October 30th, 2022
keywords: [solidity, keccak256]
description: understand keccak256 through solidity code example
tags:
    - solidity
    - keccak256
---

keccak256 はハッシュ値を計算してくれる。

ユースケースとして：

-   一意的な ID 生成
-   コンパクトな暗号的な署名（大きなインプットに対してではなく、ハッシュ値に対して署名する）

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract HashFunction {
    // ハッシュ値を計算する
    function hash(
        string memory _text,
        uint _num,
        address _addr
    ) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_text, _num, _addr));
    }

    // ハッシュ衝突
    // ハッシュ値の衝突が起きうるケース
    // to abi.encodePacked. In such case, you should use abi.encode instead.
    function collision(string memory _text, string memory _anotherText)
        public
        pure
        returns (bytes32)
    {
        // 以下のことが起きると入力値が同じとなり、値が異なるにもかかわらず同じハッシュ値となる。
        // その場合はabi.encodePackedではなく、abi.encodeを使うべき
        // encodePacked(AAA, BBB) -> AAABBB
        // encodePacked(AA, ABBB) -> AAABBB
        return keccak256(abi.encodePacked(_text, _anotherText));
    }
}

// ハッシュ値の逆算を試すための関数→逆算は不可能
contract GuessTheMagicWord {
    bytes32 public answer =
        0x60298f78cc0b47170ba79c10aa3851d7648bd96f2f8e46a19dbc777c36fb0c00;

    // Magic word is "Solidity"
    function guess(string memory _word) public view returns (bool) {
        return keccak256(abi.encodePacked(_word)) == answer;
    }
}


```

[Remix](https://remix.ethereum.org/)で試す
