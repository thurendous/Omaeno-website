---
title: 1 Hello World
author: thurendous, Polymetis
date: August 11, 2022
keywords: [solidity, hello, world]
description: solidity hello world
# slug: /hello-world
tags:
  - basic
  - first-step
---

# Solidity とは

Solidity は EVM に基づくスマートコントラクト言語の一つです。

オンチェーンのプロジェクトとか、DeFi とか、NFT とか、いろいろなところで使われています。それらを使って遊ぶときに、Solidity を知っていると便利です。

オンチェーンのスマートコントラクトは属性上、公開しなければならないため、コードが読めれば、色々な方面において非常に助けとなります。

Solidity を勉強するメリット：

- オンチェーンのコードを読めて、落とし穴を回避できて、安全に遊べる。
- 人にアドバイスもできる
- 界隈では solidity もできないかと軽蔑されることがなくなる

# Hello World

```sol
// SPDX-License-Identifier: MIT // ->著作権を宣言

// solidity のバージョンを宣言、^の意味は 0.8.13 あるいはそれより上
pragma solidity ^0.8.13;


// コントラクトの宣言、ここではコントラクトを HelloWorld と命名した
contract HelloWorld {
    //  コントラクトの内容として、greet という状態変数を宣言して初期値として`Hello World`を代入
    string public greet = "Hello World!";
}
```

- ファイル名もできるだけコントラクト名と同一にしたほうがよい
  - 例：今回の場合は`HelloWorld.sol`

[Remix](https://remix.ethereum.org/)で試す

:::tip tip

remix で試す時、solidity compiler が `0.8.13`より上の solidity のバージョンになるようにしてください（`^`は「〇〇より上のもの」を意味する）

:::
