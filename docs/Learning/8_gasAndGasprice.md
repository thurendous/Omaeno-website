---
title: 8 Gas
author: thurendous, Polymetis
date: August 15, 2022
keywords: [solidity, gas price, gas]
description: gas and gas price of Ethereum
# slug: /ether-and-wei
tags:
    - basic
    - gas
---

# ガス代

-   イーサリアムにおいてはブロックチェーンにトランザクションを送るのにガス代が発生する
    -   イーサリアムはパブリックチェーンなので公共性を有するインフラのようなもの
    -   ガス代とはイーサリアムという公共性のあるサービスを使うための手数料 ⇢ 例えるなら水道代みたなもの、使えばお金がかかる
-   ガス代の計算方法は以下となる
    -   かかったガス代 = gas spent \* gas price
    -   gas spent: 使ったガスの数量 ⇢ 使った水の量
    -   gas price: 使ったガスの単位あたりの価格 ⇢ 使った水の価格/m^3
-   ガス代を高く支払ったほうがブロックに取り込まれる優先度が高くなる ⇢ 水を使わせてくださいとお願いしたら水道局から高い料金を払った人の順番で水を使わせる
-   使いきれなかったガスは変換される
-   使ったガスは帰ってこない
-   Gas Limit
    -   2 種類がある
        -   あなた自身が設定した gas limit
        -   ブロックの gas limit -> network により設定される

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Gas {
    // ガス代を使うために、適当にと状態変数を作った
    // 状態変数はStorageに保存され、変更するたびにガス代が消費される
    uint public i = 0;

    // ガス代を使いきるとトランザクションが失敗する
    // ブロックチェーンへの変更が完成されず
    // かかったガスは返還されない
    function neverEndingLoop() public {
        // わざと無限ループを作成してすべてのガスを使い切る
        // トランザクションは失敗する
        // -> 結果としてiの値は変わらず使ったガス代が無駄になる
        // -> 全てrevertされる
        while (true) {
            i += 1;
        }
    }
}
```

[Remix](https://remix.ethereum.org/)で試す
