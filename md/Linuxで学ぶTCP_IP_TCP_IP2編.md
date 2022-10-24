---
title: Linuxで学ぶTCP_IP
date: 2022/10/24
description: ２章 TCP/IPの途中
tag: linux tcp/ip
author: ooitanojohn
---

# 昨日の実践の続き

## TCP/IP

### TCP/IP とはネットワーク世界の言語

### 正式名称

- Transmission Control Protocol
- Internet Protocol

### 何故言語が複数ある？

- 役割が違う。
  - IP とは目的地まで荷物を運ぶこと(パケット)
  - TCP とは途中で事故が起きた際に対応、管理する物
  - 荷物(パケット？)とはビット列で表現された何らかのデータ

### TCP/IP の中にも複数のプロトコルは存在する。

- 役割ごとに階層構造で分離できる(組み合わせて使う時に重要な意味を持つ)
  - OSI 参照モデル(理想の姿、実際の TCP/IP...?)
    - アプリケーション層
    - プレゼンテーション層
    - セッション層
    - トランスポート層
    - ネットワーク層
    - データリンク層
    - 物理層
  - IP(ネットワーク層)
  - TCP(トランスポート層)

### まとめ

### 明日の目標

- TCP/IP
