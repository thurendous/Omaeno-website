---
title: 20 Event
author: thurendous, Polymetis
date: September 3, 2022
keywords: [solidity, event]
description: solidity event
# slug: /hello-world
tags:
    - basic
    - event
---

Event がイーサリアムブロックチェーンのログを放出させる。こういったイベントのユースケースは：

-   イベントをリスニングして UI を更新
-   ガス代が安くデータ保存の代替案

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Event {
    // eventの宣言、３つのindexed引数の宣言が可能
    // indexedした引数はログのフィルタリングを助けてくれる
    event Log(address indexed caller, string message);
    event AnotherLog();

    // 3つのイベントが放出される関数
    function test() public {
        emit Log(msg.sender, "Hello World!");
        emit Log(msg.sender, "Hello EVM!");
        emit AnotherLog();
    }
}
```
