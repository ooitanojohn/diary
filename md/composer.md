---
title: 'composer & twig'
date: '2022-06-20'
description: 'composerとtwig'
tag: 'PHP composer twig'
author: 'ooitanojohn'
---

# composer と twig について

## composer パッケージ管理ツール

- autoload、cmd 実行でパスを書くまで自動にやってくれる
- autoload を require することでパッケージを一括読み込み可能
- 追加した名前空間は autoload キーの psr-4 キー内に記述する事で autoload してくれる様になり
- use して使うことが可能になる
- composer dump-autoload
- 追加した際に再読み込み

## twig テンプレートエンジン mvc の view を切り離した際に html っぽくかけるような asset

- $loader = new FilesystemLoader('path');
- まず view の template クラスのパスを指定して読み込み root = loader インスタンスを作成する
- $twig = new Environment($loader);
- 次に Environment クラス(twig ライブラリ)にパスを渡す
- render('読み込む html',渡す変数);
- . js のように.アクセスで情報を取ってこれる
-
