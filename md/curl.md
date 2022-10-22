---
title: 'curl'
date: '2022-06-23'
description: 'curl'
tag: 'php'
author: 'ooitanojohn'
---

# curl とは

- コマンドを利用して HTTP リクエストを行える機能

## 手順

1. curl セッション開始
2. 通信オプション設定
3. リクエスト & 結果受信
4. curl セッション終了

## サンプル

```php
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,"URL");
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
$data = curl_exec($ch);
curl_close($ch);
```
