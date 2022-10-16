---
title: 34 Contract that Creates other Contract
author: thurendous, Polymetis
date: October 16th, 2022
keywords: [solidity, contract, new]
description: understand contract that creates other contract through solidity code example
tags:
    - solidity
    - contract
    - new
---

-   コントラクトを使ってコントラクトを作成するには、`new`キーワードを用いる。
-   `0.8.0`からは、`create2`の作成方法がサポートされた。

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Car {
    address public owner;
    string public model;
    address public carAddr;

    constructor(address _owner, string memory _model) payable {
        owner = _owner;
        model = _model;
        carAddr = address(this);
    }
}

contract CarFactory {
    Car[] public cars;

    // create1 の方法
    function create(address _owner, string memory _model) public {
        Car car = new Car(_owner, _model);
        // cars配列に新しいコントラクトインスタンスを入れる
        cars.push(car);
    }

    // create1を使って作成しかもイーサも送付
    function createAndSendEther(address _owner, string memory _model) public payable {
        Car car = (new Car){value: msg.value}(_owner, _model);
        cars.push(car);
    }

    // create2の方法を使う。saltに注目すべき
    function create2(
        address _owner,
        string memory _model,
        bytes32 _salt
    ) public {
        Car car = (new Car){salt: _salt}(_owner, _model);
        cars.push(car);
    }

    // create2を使って作成しかもイーサも送付
    function create2AndSendEther(
        address _owner,
        string memory _model,
        bytes32 _salt
    ) public payable {
        Car car = (new Car){value: msg.value, salt: _salt}(_owner, _model);
        cars.push(car);
    }

    function getCar(uint _index)
        public
        view
        returns (
            address owner,
            string memory model,
            address carAddr,
            uint balance
        )
    {
        Car car = cars[_index];

        return (car.owner(), car.model(), car.carAddr(), address(car).balance);
    }
}


```

[Remix](https://remix.ethereum.org/)で試す
