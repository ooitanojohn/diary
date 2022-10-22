---
title: 'laravel-1'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

## 0. 挑戦 Station

Station.1

## 1. 実行環境(OS, Yarn, Node.js のバージョン)

docker-desktop

OS: Windows 11 Pro
Yarn: 1.22.5
Node: v14.17.1

file: C:\techTrain\tests>

docker-engine(ce)

OS: ws2- ubunts 20.04.2 LTS (Focal Fossa)

Yarn: 1.22.17
Node: v14.18.2

file:/home/ooitanojohn/techtrain/tests

## 2. 現在起こっていること(エラー文のコピぺやスクショも含める)

[welcome ページを表示するのに 12 秒もかかっている!]

2. 知りたいこと

- laravel に追加した movie.model etc..が関与しているのか ?

or

- docker の方の問題 ?

[https://docs.docker.com/desktop/windows/wsl/#best-practices](https://docs.docker.com/desktop/windows/wsl/#best-practices)

linux ファイルシステムに保存することをお勧めします。→ ファイルシステムが詳しく分からない

ファイルシステムのパフォーマンスとはどういう事だろう

Linux コンテナは、元のファイルが Linux ファイルシステムに保存されている場合にのみファイル変更イベント（「inotify イベント」）を受け取ります。たとえば、一部の Web 開発ワークフローは、ファイルが変更されたときに自動リロードするために inotify イベントに依存しています。

普段扱っているファイルの index(ファイル名?)とデータ(場所?)を結びつけているという認識

/home/ooitanojohn/techtrain/tests に格納 ?

[https://docs.microsoft.com/ja-jp/virtualization/windowscontainers/deploy-containers/linux-containers](https://docs.microsoft.com/ja-jp/virtualization/windowscontainers/deploy-containers/linux-containers)

解決 : ubunts ディレクトリに格納していないからでした

php-8.0 とか mb-ext dom 系の php 拡張入れないといけないかも ?

chmod 777 storage したり

## 3. 再現するための手順

[docker hyper-v ws2 有効 ubunts 入れて compose 運用してるのみです]

## 4. 実現したいことは何か？

[1 秒以下で表示]

## 5. 自分で調べたこと

[docker-desktop : docker-engine

docker-desktop-data : image,container,volumes]

## 6. メモ

[route

table : model :

テーブル名 : 手動指定しなければ\_

主キー : id があれば自動的に主キーにする前提/int/オートインクリメント前提 それぞれ変更があれば指定

timestanp : def UTF になっているかも? ymdformat 列名変更したいなら const CRE|UPD~\_AT = “name”

connect : DB 変更

attribute : ?? 属性値

[関係モデル](https://ja.wikipedia.org/wiki/%E9%96%A2%E4%BF%82%E3%83%A2%E3%83%87%E3%83%AB) (リレーショナルモデル) においては、属性名と[定義域](<https://ja.wikipedia.org/wiki/%E5%AE%9A%E7%BE%A9%E5%9F%9F_(%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9)>)の名称のペア (属性名と定義域名から構成されるコンポーネント)

定義域は、[データ型](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E5%9E%8B)と同じ意味と考えてよい　= int str

属性は、その定義域に適合するなんらかの値をもつ。この値を**属性値** (attribute value)

[関係データベース](https://ja.wikipedia.org/wiki/%E9%96%A2%E4%BF%82%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9)の[データベース言語](https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E8%A8%80%E8%AA%9E) [SQL](https://ja.wikipedia.org/wiki/SQL)  では、属性とほぼ同じ意味で**列** (**カラム**、[英語](https://ja.wikipedia.org/wiki/%E8%8B%B1%E8%AA%9E): column) という用語が使われている

migration 時に coudnot~driver php.ini の extension 有効

- なお、テーブル定義を新しく作り直す場合は列だけを追加する Migration を作成しなくても、既存の Migration を修正し以下コマンドでテーブルを再作成できる
