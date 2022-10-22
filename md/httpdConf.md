---
title: '.htaccess'
date: '2022-07-04'
description: 'apache設定'
tag: 'apache htttpConf htaccess'
author: 'ooitanojohn'
---

#

1. mod_rewrite を有効にする
2. RewriteCond REQUEST_FILENAME -f -d フォルダ,ファイルオプション 書き換える条件
3. RewriteRule ^ index.php 全ての文字を index.php に書き換える
