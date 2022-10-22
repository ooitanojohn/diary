---
title: 'リクエストメソッド'
date: '2022-07-01'
description: 'reqのメソッド一覧意味'
tag: 'http req'
author: 'ooitanojohn'
---

# request method

## get

- 値を取ってくる
- query が url に残る

## post

- 新しいリソースを作成するか、指定したリソースの表現をリクエストのペイロードで置き換える。
- 複数同一リクエストを送信した場合、有効になってしまう
  - ### content-type を以下の 3 つから選択できる.
  - #### application/x-www-form-urlencoded
    - キーと値は、 '&' で区切られる。キーと値の組が '=' で結ばれる。
    - キーや値が英数字以外の文字であった場合 [Percent-encoding](https://developer.mozilla.org/ja/docs/Glossary/percent-encoding) されてしまう。
    - 画像ファイルなどが読み込めなくなってしまう可能性あり
  - #### multipart/form-data
    -
