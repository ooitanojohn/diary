---
title: 'github git-flow'
date: '2022-06-07'
description:
tag: file
author: You
---

# [blog の制作にあたり git-flow をちゃんと使用する](https://dev.classmethod.jp/articles/introduce-git-flow/)

## local で master develop feature

- チュートリアルの内容は develop で開発して 機能追加で feature に切り替えて作成する
- master を fetch する
- develop ⇔ feature で開発後 merge
- develop で確認後 ⇔ release に merge
- git merge br
- git co

## remote で master release hotfix

- develop で開発したものを release に merge して release ブランチに push
- release に fetch したものを develop に merge

- [remote commit 取り消し](https://techtechmedia.com/cancel-remote-commit-git/#:~:text=%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%81%AB%E8%AA%A4%E3%81%A3%E3%81%A6%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5%E3%81%97%E3%81%A6%E3%81%97%E3%81%BE%E3%81%A3%E3%81%9F%EF%BC%81,-%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%81%AB%E3%83%97%E3%83%83%E3%82%B7%E3%83%A5&text=%E3%83%AA%E3%83%A2%E3%83%BC%E3%83%88%E3%81%A8%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%AE%E3%82%B3%E3%83%9F%E3%83%83%E3%83%88,%E3%81%93%E3%81%A8%E3%81%A7%E8%A7%A3%E6%B6%88%E3%81%A7%E3%81%8D%E3%81%BE%E3%81%99%E3%80%82)

## [ローカルのブランチ名変更](https://qiita.com/suin/items/96c110b218d919168d64)

    ## revert log show etc..

- [revert](https://qiita.com/chihiro/items/2fa827d0eac98109e7ee)
- [merge 取り消し](https://qiita.com/chihiro/items/5dd671aa6f1c332986a7)

## [amend オプション](https://backlog.com/ja/git-tutorial/stepup/22/)

- --amend オプションを指定してコミットを行うと、同じブランチの直前のコミットに対して内容を追加やコメントの修正をすることができます。
