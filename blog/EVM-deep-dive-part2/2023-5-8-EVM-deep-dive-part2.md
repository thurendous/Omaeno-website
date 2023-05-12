---
slug: EVM-deep-dive-part2
title: EVM ディープダイブ - super coder への道 🥷 💻Part 2
authors: [Thurendous]
blogDescription: 'EVM ディープダイブ - super coder への道 🥷 💻Part 2'
tags: [EVM, opcode, Etheruem, blockchain, examples]
---

Hi Hi, nerver give up!

# Never Give Up

以前書いた時から、EVM について理解できてきているので、当時は読みづらかった技術系の文章もすらすら読めるようになりました。そこで頑張っているあなたももしかして読めずに悩んでいるのかもしれません。僕もそうだったので、安心してください。そのうち理解できるようになるだろう。

ちなみに、こちらの画像をみてごらん。

本当に経験した人しかわからないと思いますし、経験したとしてももう一度経験すると、やはり信じられない気持ちになると思うよね。続けることが一番大切だ。

-   遅くてもいい

![](./0plus1is1.png)

-   理想と現実

![](./meikyuu.png)

-   「続けてても意味ない」

![](./thisispointless.png)

-   最初の第一歩が一番むずいけどね

![](./keeptrying.png)

-   三日坊主 VS 続ける

![](./keeptryingallday.png)

---

今回は、メモリーについて説明する。

Part 1 では、EVM がどのようにバイトコードのどこを狙って run させるかを見てきた。 それは、外部の calldata を入力してきてコントラクトのどの関数を呼んでいるかを判別して run すべきバイトコードの箇所を決めていることがわかった。

これを理解することで、関数の署名・call stack・calldata・EVM のオペコード について理解が進んだと思う。

Part 2 では、EVM におけるメモリーについて色々見ていこう。

# Memory

Part1 のコードを思いだしてみて。`1_Storage.sol`というコントラクトがあった。

```sol
pragma solidity >=0.7.0 <0.9.0;

contract Storage {
	uint256 number;

	function store(uint256 num) public {
		number = num;
	}

	function retrieve() public view returns (uint256) {
		return number;
	}
}
```

これのバイトコードを生成すると、こうなっている。

```
608060405234801561001057600080fd....
```

今回はこの部分にフォーカスして説明したいと思う。一番最初の 5bytes だ。

```
60 80                       =   PUSH1 0x80
60 40                       =   PUSH1 0x40
52                          =   MSTORE
```

これがいわゆる、聞いたことあるかもしれないけど、「free memory pointer」だ。

これを理解するには、まずはコントラクトのメモリーを理解しなければならない。

# メモリのデータ構造

コントラクトのメモリはシンプルにいうと、byte の array だ。32bytes(256bit)あるいは 1byte(8bit)の単位として保存される。読まれるときには、32bytes(256bit)単位ごとになる。下記の画像は話した内容を具現化したもの。

![](memoryImpression.png)

この機能は３つの opcode に左右されている。

-   MSTORE(x, y) - 32 byte(256 bit) の値 y をメモリのロケーションの x に保存
-   MLOAD(x) - 32 byte(256 bit) のメモリの場所をロケーション x から読み出し、スタックに入れる
-   MSOTRE8(x, y) - 1 byte (8 bit)の値 y をメモリロケーションの x に保存する

メモリロケーションのことはどこからメモリを読み取る/書き込むかを決めていると考えてよい。もし、1byte より多く読み取る/書き込むことをしたいのであれば、そのまま継続すればよいだけの話になる。

# EVM playground

この [EVM playground](https://www.evm.codes/playground?fork=shanghai) はあなたの理解の手助けができるだろう。Run をクリックして、右上の矢印をクリックしたり、してみよう。矢印ボタンはコードの稼働プロセスをたどっていってくれる。スタック、メモリはどうなっているのかもわかる。すごく直感的なツールだと感心する。

```
// MSTORE 32 bytes 0x11...1 at memory location 0
PUSH32 0x1111111111111111111111111111111111111111111111111111111111111111
PUSH1 0x00
MSTORE

// MSTORE8 1 byte 0x22 at memory location 32 (0x20 in hex)
PUSH1 0x22
PUSH1 0x20
MSTORE8

// MSTORE8 1 byte 0x33 at memory location 33 (0x21 in hex)
PUSH1 0x33
PUSH1 0x21
MSTORE8

// MLOAD 32 bytes to the call stack from memory location 0 ie 0-32 bytes of memory
PUSH1 0x00
MLOAD

// MLOAD 32 bytes to the call stack from memory location 32 ie 32-64 bytes of memory
PUSH1 0x20
MLOAD

// MLOAD 32 to the call stack from memory location 33 ie 33-65 bytes of memory
PUSH1 0x21
MLOAD
```

![](https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3e29126-2954-40e3-bc1b-7ca5e780fd1c_1500x850.png)

opcode についても英語だが、説明文がついている。

やってみて変だなと思うことはないのか？
まず、MSTORE8 を使って 1 byte の 0x22 をメモリの 0x20 に書き込んでいるつもりだが、何故かメモリはここから、

![](https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F954d54e6-0bce-4de3-a61d-dd41fdae49c7_836x152.png)

こう変わるんだ。

![](https://substackcdn.com/image/fetch/w_1272,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F225fde5a-09bf-4a24-a702-88ad5010951e_836x176.png)

この余分なゼロってなんなんと思うだろうな。

## メモリの拡張

コントラクトがメモリへなにかを書き込む際、byte 数に従ってガス代を支払わないといけない。もし、これまで書き込んだことがない場所へ書き込む場合、追加的にメモリ拡張のコストがかかる。

これまで書き込んだことがない箇所へ書き込む場合、メモリは 32bytes(256bit)拡張されることになる。

> メモリのコストの増え方に関しては、最初の 724bytes は線形的に増加するが、それ以降は二次指数関数的になる。

上の例では、まず 0x00 のロケーションへ 32 bytes 書き込んだが、そこからさらに書き込むとなると、メモリ拡張をしなければならず、結果的に、メモリは 64 bytes になった。

メモリにある保存領域の最初のデフォルト値はゼロ。だから 2200000000000000000000000000000000000000000000000000000000000000 がメモリに追加された。

## メモリは byte の Array だから

次に注意しないといけないのは、メモリロケーションの 33(0x21)から MLOAD したときに、下記の値が返された。

```
3300000000000000000000000000000000000000000000000000000000000000
```

32 bytes ずつ読み込んでいなくても、読み込めるということであった。

memory はただの byte array なので、どこの場所からでも読み込めることを覚えて下さい。32bytes の制限は特になく、どこからでも byte 単位から読み込める。

> 関数内でのみ新たにメモリを作成することができます。それは新たにインスタンス化された複雑な型（例えば `new int[...]` など）であったり、ストレージ参照変数からコピーされたものであったりします。

現在、我々はデータ構造について理解できたので、free memory の話へ戻ろう。

# Free Memory Pointer

Free Memory Pointer とは、簡単にいうとメモリロケーションのポインターであり、Free Memory がどこからスタートすべきなのかを記録している。言い換えると、メモリのロケーションはどこまで書き込まれていて、どこから書き込むべきなのかを記録している。

これはコントラクトがメモリを上書きするのを防ぐためでもある。

変数がメモリへ書き込むときに、コントラクトはまず Free Memory Pointer を参照し、どこから書き込むべきかを決めないといけない。それから Free Memory Pointer をアップデートし、最新のメモリの境界値を記録する。

```
  newFreeMemoryPointer = freeMemoryPointer + dataSizeBytes
```

## Bytecode

先程でも言及したように、Free Memory Pointer は最初の runtime bytecode のこの部分によって定義される。

```
60 80                       =   PUSH1 0x80
60 40                       =   PUSH1 0x40
52                          =   MSTORE
```

これは基本的に何を言っているかというと、Free Memory Pointer はメモリロケーションの 0x40(64 in decimal)で、値は 0x80(128 in decimal)となる。

すぐに疑問に思うのは、なぜこの数字なのということだろう。
答えはこれ：

> 0x00 - 0x3f (64 bytes): scratch space
>
> 0x40 - 0x5f (32 bytes): free memory pointer
>
> 0x60 - 0x7f (32 bytes): zero slot

0x40 は solidity が定義した一番最初の Free Memory Pointer のメモロケーションだ。値 0x80 は単に最初の 4 つの 32 bytes のポジションを記録している。

これらの予約されたメモリについて

-   Scrach space: inline assembly のハッシングメソッドとして使っても良い
-   Free memroy pointer: 今のメモリのサイズ、free memory のスタートロケーション、最初は 0x80
-   The zero slot: 動的な Memory Array の初期値であり、どんなときにでも書き込まれることはない

# コントラクトのメモリ

リアルなコントラクトのメモリについて見ていくとしようか。

非常にシンプルなコントラクトを作成した。こいつの名は `MemoryLane`。たった一個の関数を持っており、２つの Array を持っている。それから b[0]に値 1 を付与する。

3 行程度のコードだけど、かなり多くのことが起きているよ。

```sol
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.3;

contract MemoryLane {
	function memoryLane() public pure {
		bytes32[5] memory a;
		bytes32[5] memory b;
		b[0] = bytes32[uint256(1)];
	}
}

```

上記のコードをもう一度 remix へ投入。

それから、コンパイルし、デプロイしてください。

`memoryLane()`関数を run して、debugging mode へ入ってください。

opcode を少しずつ見ていこう。

少し簡単なバージョンを[EVM playground](https://www.evm.codes/playground?unit=Wei&codeType=Mnemonic&code=%27Vg*%28_I...1W0GJ_%21%21%21%21z00FK22WJQ0Y22z20F8K33W33Q1Y33z21F8d%28v0Z0-Jq00Xd%28vJZJ-64q20Xdv33Z33-65q21Xpp%27%7EN+locatioCzG1_wppVv7o7hBcall+stack+from%7EuIIIIq%28+ofNzp%5Cnj+bytegSTOREdw%29*_+0xZ9BY9Chex%7DzXpM%29W+at%7EV%2F%2F+MQ+%7B0x2N+memoryKwg8+1j_J32I11GpPUSHFpMgCn+Be+9+i7+t*+J%29LOAD%28js%21uu%01%21%28%29*79BCFGIJKNQVWXYZ_dgjpquvwz%7E_&fork=shanghai)へ入れている。

## Reference

[EVM Deep Dives: The Path to Shadowy Super Coder 🥷 💻 - Part 2](https://noxx.substack.com/p/evm-deep-dives-the-path-to-shadowy-d6b?s=r)
