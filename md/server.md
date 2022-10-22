---
title: 'server'
date: '2022-06-17'
description: 'サーバーあれこれ'
tag: 'server'
author: 'ooitanojohn'
---

# サーバー

## [ISS (windows server)](https://www.kagoya.jp/howto/it-glossary/server/iis/)

- セキュリティが非常に高い
- 使いやすさが簡単
- [rasPi for ISS](https://www.limemo.net/blog/2013/12/%E3%83%A9%E3%82%BA%E3%83%99%E3%83%AA%E3%83%BC%E3%83%91%E3%82%A4%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E3%81%BF%E3%82%8B-windows%E3%81%A7%E3%82%88%E3%81%8F%E4%BD%BF%E3%81%86www%E3%82%B5%E3%83%BC.html)

## apache

- リクエストごとにスレッドを立ち上げている為、複数同時の処理を捌けない(c10k 問題) client10000
- 設定がやや難しい

## nginx

- 同時リクエストに対応
- 設定が難しい

## node.js

-
