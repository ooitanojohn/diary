---
title: 'Laravel-6'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

## 1. 実行環境(OS, Yarn, Node.js のバージョン)

docker-engine(ce)

OS: ws2- ubunts 20.04.2 LTS (Focal Fossa)

Yarn: 1.22.17
Node: v14.18.2

## 2. 現在起こっていること(エラー文のコピぺやスクショも含める)

[現在起こっていることを書きます]

## 3. 再現するための手順

[実行したコマンドを順番に書きます]

## 4. 実現したいことは何か？

[実現したいことを書きます]

## 5. 自分で調べたこと

[自分で調べたことを書きます]

// validate 型指定

[https://laravel.com/docs/8.x/validation#available-validation-rules](https://laravel.com/docs/8.x/validation#available-validation-rules)

// column 型指定

[https://laravel.com/docs/8.x/migrations#available-column-types](https://laravel.com/docs/8.x/migrations#available-column-types)

## 6. メモ

**スクリーンの増設に対応しよう**

「再来月からスクリーンが 2 室増える」
「スクリーンは 1 つだけじゃなかったのか？」
「修理中だった。終わったので 3 室で運営するようになる」
「はぁ」
「客は 3 つのどれにいくかはチケットを見てわかるようになっているから予約時は知らなくていい」
「なるほど」
「複数のスクリーンで同じ作品を上映することはない。たぶん」
「ないということにするから」
「たぶんない。よほどの人気作になったら他のシネコンに行っちゃう。うちはうち」

スクリーンを区別しなければならなくなった。
各スクリーンで上映する作品を変えるのはスケジュールを変更するタイミングと同じらしいので管理画面はいらなそう。
座席のレイアウトはすべて同じらしい。作品と紐づくときっとひどいことになるので座席と紐付けることにする。

同じ構成の座席を持つスクリーン 1,2,3 を区別できるように実装しましょう。
screens テーブルの構成も考えて実装してみてください。
同じ映画館別スクリーンの同じ座席で予約済みであると誤判定しないか確認してみましょう

【仕様】

- スクリーン 1,2,3 でそれぞれ別の作品を上映している
- スクリーン 1-3 のどこで上映されるかは、映画館にいくまでユーザが知る必要はないので画面に出す必要はない
- 同じ時間帯であってもスクリーンが別であれば同じ席番号も予約できる
- スクリーン 1 の A-1 とスクリーン 2 の A-1 は別物なので予約できる

**クリア条件**

1. ユーザの入力項目、フォームなどには変わりがない
2. 自分で screens テーブルの定義を考え、migration を作成していること
3. 予約に関してこれまでの仕様が満たされていること

作品と紐づくときっとひどいことになる ?? → 参照順を作品から座席にするとおかしな事になる

複数のスクリーンで同じ作品を上映することはない。

schedule table

movie_id,date 被り無し

各スクリーンで上映する作品を変えるのはスケジュールを変更するタイミングと同じ

schedule table

作品と紐づくときっとひどいことになる movies x

同じ映画館別スクリーンの同じ座席で予約済みである誤判定しない

date = schedule_id = sheet_id 存在

screen table

id 1~3

screen id 1~3

sheet id 1~15

screen

一つの座席に対して複数のスクリーン

座席の数が違う場合は？1 対 1

始め一緒途中故障で違う

1 対多

sheets screens

id 1~15 id(1~45) pri

column sheet id for 1~15

row screen_id 1~3

schedules table

id

movie_id

~~追加 screen_id (int 3) してはいけない？~~

start_time

end_time

created_at

updated_at

reservation

id

date

schedule_id

sheet_id

email

name

created_at

updated_at

[https://www.figma.com/file/eYcuDHlO5HidDr36xXRmb0/Database-Diagram-(Community)?node-id=0%3A1](<https://www.figma.com/file/eYcuDHlO5HidDr36xXRmb0/Database-Diagram-(Community)?node-id=0%3A1>)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f9fdc4a1-43c3-468a-ad2d-4bb8566bb127/Untitled.png)

変更必須 :

スケジュール登録時に sheet → screen を紐づけて登録

席番号だけで ok!

station14

**ユーザ登録できるようにしよう**

「同じ人がどんな映画を予約しているかを知りたい」
「たぶんできる」
「後々それに合わせて優待できるようにしたいからユーザ登録的なものを」

ユーザ登録を後回しにしていたがやっぱり必要そうなので実装する。

---

ユーザ登録機能を作りユーザがログインできるようにしましょう。
既存の予約に紐づく情報はユーザ経由で取得できるようにデータも移行しましょう。
ユーザ機能自体は"devise"という Gem を使って実現しましょう。
migration でのデータ移行は Reservation モデル内のメソッドを migrate クラス内の data メソッドに置くことで可能です。

【ページの仕様】

- ユーザ登録ページ `/users/new` を作る
- 名前・メールアドレス・パスワード・確認用パスワードを受け取るフォーム
- パスワードと確認用パスワードが一致するかどうかをバリデーションする
- メールアドレスをバリデーションする
- メールを送って確認などは一旦省略
- ユーザ登録していないと座席を予約できないようにする
- 予約時に name と email を入力させる部分でユーザ情報を使うようにする
- migration を作って実行する
