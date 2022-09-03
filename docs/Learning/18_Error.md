---
title: 18 Error
author: thurendous, Polymetis
date: September 3, 2022
keywords: [solidity, error]
description: solidity error
# slug: /hello-world
tags:
    - basic
    - error
---

エラーが発生するとトランザクションにおけるすべての処理が取り消される。
３つのパターンがある。

-   `require`は評価式の条件を満たすように処理をするもの。残りのガス代は caller に返却される。
-   `revert`は評価式を持たず、使う場合は`if`文に評価式を書いて一緒に使うことが多い。残りのガス代は caller に返却される。
-   `assert`は fail することが許されない場合に使う。残りのガス代は消費される。

カスタムエラーを使うとガス代の節約になる。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Error {
    function useRequire(uint _i) public pure {
        // _iが10より大きい場合のみトランザクションが通る
        require(_i > 10, "Input must be greater than 10");
    }

    function useRevert(uint _i) public pure {
        // revertはif文と一緒に使うことが多い
        // ここは上のrequireと同じ意味を持つ
        if (_i <= 10) {
            revert("Input must be greater than 10");
        }
    }

    uint public someNum;

    function useAssert() public view {
        // assertはエラーが出ないようにテストする場合に使う

        // こちらはsomeNumは絶対に0になると検証している
        assert(someNum == 0);
    }

    // カスタムエラーはsolidity0.8以降で改善されたガス代を節約するエラーの返し方で、ログみたいなもの
    error InsufficientBalance(uint balance, uint withdrawalAmount);

    function testCustomError(uint _withdrawalAmount) public view {
        uint bal = address(this).balance;
        if (bal < _withdrawalAmount) {
            revert InsufficientBalance({balance: bal, withdrawalAmount: _withdrawalAmount});
        }
    }

    /* カスタムエラーになった場合、こんな感じになる
    * errorで宣言しておくと、revertされた場合にログのようなものが以下のような形式で出力される。
    * revert
    * The transaction has been reverted to the initial state.
    *    Error provided by the contract:
    *    InsufficientBalance
    *    Parameters:
    *    {
    *            "balance": {
    *            "value": "0"
    *        },
    *            "withdrawAmount": {
    *            "value": "100000000000000000"
    *        }
    *    }
    */
}

```

[Remix](https://remix.ethereum.org/)で試す
