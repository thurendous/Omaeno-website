---
title: 14 Struct
author: thurendous, Polymetis
date: August 28, 2022
keywords: [solidity, array]
description: solidity struct
# slug: /hello-world
tags:
    - basic
    - struct
---

# Struct

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Todos {
    // structのblue printの宣言
    struct Todo {
        string text;
        bool completed;
    }

    // struct Todo型の配列todosインスタンスを作成
    Todo[] public todos;

    // 配列todosに新しいstruct Todo型インスタンスtodoを要素として追加する関数
    function addTodo(string calldata _text) public {
        // structを初期化する３つの方法
        // ①要素を引数として入れる関数のように作成
        todos.push(Todo(_text, false));

        // ②javascriptのobjectみたいに作成
        todos.push(Todo({text: _text, completed: false}));

        // ③空っぽなstructを作成して後から代入
        Todo memory todo;
        todo.text = _text;
        // todo.completedの初期値はfalseだから代入は不要
        todos.push(todo);
    }

    // 'public'で宣言しているので、Solidityはgetter関数を用意してくれているのでこの関数はなくてもよい
    function get(uint _index) public view returns (string memory text, bool completed) {
        Todo storage todo = todos[_index]; // storageにしないとmemoryになるのでtodoは書き換えられない
        return (todo.text, todo.completed); // 複数の値を返したいときによく使うパターン
    }

    // textをアップデートする関数
    function updateText(uint _index, string calldata _text) public {
        Todo storage todo = todos[_index]; // ※storageは気にせず後の章で紹介する
        todo.text = _text;
    }

    // todoが完了するとcompletedをtrueにする関数
    function toggleCompleted(uint _index) public {
        Todo storage todo = todos[_index]; // storageにしないとmemoryになるのでtodoは書き換えられない
        todo.completed = !todo.completed;
    }
}

```

:::tip tip

Solidity を勉強する際には、Solidity を完全マスターするよりも、何か作りたいものを作れるようになることをゴールにしたほうが良いです。

:::

[Remix](https://remix.ethereum.org/)で試す
