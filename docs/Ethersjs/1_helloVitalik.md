---
title: 1 Hello Vitalik
author: thurendous, Polymetis
date: August 11, 2022
keywords: [solidity, hello, world]
description: ethersjs hello world
# slug: /hello-world
tags:
    - basic
    - first-step
---

# Hello Vitalik

## Ethers.js 概要

Eterhs.js はオープンソースでブロックチェーンとのコミュニケーションをとるために使われるパッケージです。
もし、Dapp を作っていてフロントエンドで必要となるでしょう。

より前に出た web3.js よりは以下のメリットがあると言われている。

-   コードのサイズがもっと小さい。ethers.js は 116.6kB、web3.js は 590.6kB
-   ENS をサポートしている。

## 開発環境

今回は VScode を使ってやります

まずは node がシステムに存在していることを確認する。以下のような感じだと OK です。

```shell
$ node -v
v18.9.0
```

terminal 開いて以下のコマンドをやっていきましょう
フォルダを作成
npm で`ethers.js`インストールしてください

```
$ mkdir helloVitalik
$ npm install -D ethers
```

インストールが完了すると、package.json ファイルは以下の通りになっていることを確認してください。`"type":"module"`を追加しています。

```json
{
    "type": "module",
    "dependencies": {
        "ethers": "^5.7.1"
    }
}
```

## コード

それでは、メインなコードの部分を作成しましょう。

```javascript
// ethersをインポート
import { ethers } from 'ethers'
// providerを定義する。こちらではdefaultなproviderを使った。これは読み込み専用のプロバイダー
// リクエストの数量に制限がかかっているので、本当はご自身のRPCを用意してたほうがいい
const provider = ethers.getDefaultProvider()
// 非同期的にイーサのバランスをとってきてくれる関数
const main = async () => {
    const balance = await provider.getBalance(`vitalik.eth`)
    // ターミナルに表示させる
    // `ethers.utils.formatEther`はweiをetherにするための方法
    console.log(
        `ETH Balance of vitalik: ${ethers.utils.formatEther(balance)} ETH`
    )
}

main()
```

最後の結果はこうなれば OK です。

```shell
$ node vitalikEthAmount/helloVitalik.js
ETH Balance of vitalik: 1001.59178559719869201 ETH
```

:::info コラム

ethers.provider を使用すると、Ethereum ブロックチェーンへの接続を抽象化することができます。これは、ブロックチェーンの状態を変更するクエリの発行や署名付きトランザクションの送信に使用することができます。以下に 3 つの例示を示します。

引用元：[ethers.js とは(ethers.js の基本概念や特徴の解説)](https://zenn.dev/nft/books/410be300912936/viewer/00c605)

:::

## 課題

> vitalik 氏は 2022.7.30 に 2251ETH を持っており、2022.7.31 に 1951ETH になりました。この間、彼は何をしたのでしょうか？  
> (HINT: [Etherscan](https://etherscan.io/) を使う)
