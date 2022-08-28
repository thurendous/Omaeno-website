---
title: 12 Mapping
author: MarkWu, Polymetis
date: August 27, 2022
keywords: [solidity, mapping]
description: solidity mapping
# slug: /hello-world
tags:
    - basic
    - mapping
---

# Mapping

Mapping はイテレートできません。要するにループで取り出すことはできません。
書き方はこちら：`mapping(keyType => valueType)`。
keyType は通常`address`, `uint`, `bytes`, `string`, `contract` etc
valueType は`mapping`や`array`を含む全ての型

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Mapping {
    // addressからuintへというマッピング->ERC20 tokenのバランスはこんな感じ
    mapping(address => uint) public balanceOf;

    function get(address _addr) public view returns (uint) {
        // mappingは絶対になんらかの値を返してくれる
        // もし登録されていない場合、初期値の値を返す
        return balanceOf[_addr];
    }

    function set(address _addr, uint _i) public {
        // mappingへの書き込みができる関数
        balanceOf[_addr] = _i;
    }

    function remove(address _addr) public {
        // 登録されている値を削除し、初期値に戻す関数
        delete myMap[_addr];
    }
}

contract NestedMapping {
    // ネストされたmappingのことで、二重のmapping
    mapping(address => mapping(uint => bool)) public nestedMap;

    function get(address _addr1, uint _i) public view returns (bool) {
        // You can get values from a nested mapping
        // even when it is not initialized
        return nestedMap[_addr1][_i];
    }

    function set(
        address _addr1,
        uint _i,
        bool _boo
    ) public {
        nestedMap[_addr1][_i] = _boo;
    }

    function remove(address _addr1, uint _i) public {
        delete nestedMap[_addr1][_i];
    }
}

```

:::info コラム

ブロックチェーンの状態（World State）を改変するにはトランザクションを発行するしかありません。
関数を実行するに当たってトランザクションを発行しています。
イーサリアムは約 14 秒に 1 回新しいブロックが生成され、ブロックチェーンを形成しています。
1 つのブロックは多くのトランザクションが含まれています。
次の参照サイトでビジュアルにトランザクションを見ることが出来ます。
[参照サイト](https://txstreet.com/v/eth-btc)
トランザクションとはこのようにブロックチェーンに何かしらの操作を加えることになります。

:::

:::info ブロックチェーンのたとえ話

ブロックチェーンは各村人がどれくらいお金を持っているか（World State）を記録する石碑で各村人が一人ずつ持っていて常時同期されるようなものです。その石碑にある書き込み内容は村人全員のコンセンサスによって管理されています。これによって、ものすごい冗長性（誰かが石碑をなくしても平気だということ）が担保されてずるができないような仕組みが完成されます。

:::
