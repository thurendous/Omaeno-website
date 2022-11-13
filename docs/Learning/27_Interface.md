---
title: 27 Interface
author: thurendous, Polymetis
date: October 1st, 2022
keywords: [solidity, interface]
description: understand solidity's interface through solidity code excample
tags:
    - basic
    - interface
---

コントラクトとインタラクションを取るには、インターフェースを宣言すればできる。

Interface の特徴

-   関数は中身を確定しない
-   他の interface を継承可能
-   宣言された関数はすべて external
-   コンストラクタを持たない
-   状態変数を持たない

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

// interfaceにある関数は全部external
interface ICounter {
    function count() external view returns (uint);

    function increment() external;
}


// MyContractがICounterのインターフェースを使って
// Counterコントラクトの関数を呼び出す
contract Counter is ICounter {
    uint public count;

    function increment() external {
        count += 1;
    }
}

contract MyContract {
    function incrementCounter(address _counter) external {
        ICounter(_counter).increment();
    }

    function getCount(address _counter) external view returns (uint) {
        return ICounter(_counter).count();
    }
}

// Uniswapのインターフェースの例
// 作ったinterfaceを通して、uniswapのアドレスがあれば
// uniswapとのインタラクションが可能
interface UniswapV2Factory {
    function getPair(address tokenA, address tokenB)
        external
        view
        returns (address pair);
}

interface UniswapV2Pair {
    function getReserves()
        external
        view
        returns (
            uint112 reserve0,
            uint112 reserve1,
            uint32 blockTimestampLast
        );
}

contract UniswapExample {
    address private factory = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    address private dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address private weth = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;

    function getTokenReserves() external view returns (uint, uint) {
        address pair = UniswapV2Factory(factory).getPair(dai, weth);
        (uint reserve0, uint reserve1, ) = UniswapV2Pair(pair).getReserves();
        return (reserve0, reserve1);
    }
}


```

:::info コラム

interface があることによって、他の人が作成したコントラクトを呼び出すことができ、ブロックチェーンにあるコントラクトの相互結合ができて、これがいわゆるブロックチェーンにあるスマートコントラクトの「コンポザビリティ」ができる。子供のおもちゃのレゴみたいにどんどんどんどん組み上げられて高度なアプリケーションが作れるようになる。もちろん、レゴみたいに中間において一個だけが崩れると全体が崩れるので、リスクもそれだけ増えることになる。

:::

[Remix](https://remix.ethereum.org/)で試す
