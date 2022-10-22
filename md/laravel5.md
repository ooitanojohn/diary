---
title: 'Laravel-5'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

## 5. 自分で調べたこと

laravel の文法

route まとめ

url 直接叩く get redirect

url パラメータ 同様の処理 get メソッド上が優先

post フォーム呼び指し post メソッド

blade

{{ }} 画面に出力 サニタイズ, etc.. 辺りは??

@if (条件式)

@else

@endif

laravel

eloquent

route

blade

session

err

url パラメータ

// validate 型指定

[https://laravel.com/docs/8.x/validation#available-validation-rules](https://laravel.com/docs/8.x/validation#available-validation-rules)

// column 型指定

[https://laravel.com/docs/8.x/migrations#available-column-types](https://laravel.com/docs/8.x/migrations#available-column-types)

## 6. メモ

station 7

【仕様】

- `GET /sheets` で座席表を表示する ok
- sheets テーブルに座席表マスターデータ（変更されることのない基本的なデータ）をいれておく ok

- マスターデータは Seed コマンドによって作成できるようにすること ok
- テーブル定義とマスターデータは下記の通り ok
- マスターデータを元にループするように実装しておく ?
- table タグを使い表形式で表示する ok

【座席配置】

|  .  |  .  | スクリーン |  .  |  .  |
| :-: | :-: | :--------: | :-: | :-: |
| a-1 | a-2 |    a-3     | a-4 | a-5 |
| b-1 | b-2 |    b-3     | b-4 | b-5 |
| c-1 | c-2 |    c-3     | c-4 | c-5 |

[https://notepm.jp/help/markdown-table](https://notepm.jp/help/markdown-table) : md table

【テーブル仕様】

````jsx
テーブル名: sheets
モデル: App\Models\Sheet.php

```sql
CREATE TABLE IF NOT EXISTS `railway`.`sheets` (
`id` INT NOT NULL AUTO_INCREMENT,
`column` TINYINT(5) NOT NULL,
`row` VARCHAR(1) NOT NULL,
PRIMARY KEY (`id`))
````

````

【投入するマスターデータ】

```sql
INSERT INTO `sheets` VALUES(1, 1, 'a'), (2, 2, 'a'), (3, 3, 'a'), (4, 4, 'a'), (5, 5, 'a'), (6, 1, 'b'), (7, 2, 'b'), (8, 3, 'b'), (9, 4, 'b'), (10, 5, 'b'), (11, 1, 'c'), (12, 2, 'c'), (13, 3, 'c'), (14, 4, 'c'), (15, 5, 'c');
````

**クリア条件**

1. sheet テーブルについて migration ファイルが存在し、syntax error が存在しないこと ok
2. sheet テーブルについて Seed でマスターデータが作成されること ok
3. GET /sheets について 200 で HTML を返すこと ok
4. GET /sheets について Sheets テーブルの全てのデータが表示されていること ok
5. GET /sheets について「行-列」の文字列が表示されていること ok

station8

- `GET /movies/{id}` で ID に対応する映画作品詳細ページを表示する ok
- 各カラムの情報をすべて表示する ok
- 画像は img タグで表示する ok
- その映画作品に紐づく上映スケジュールをすべて表示する ok
- Schedules モデルを作る ok
- 以下のテーブル仕様を満たすような migration ファイルを作成して migrate を実行する ok
- Movies と Schedules は 1 対 N の関係なのでアソシエーションを設定する(アソシエーション名は schedules にする) ok

【テーブル仕様】
以下のような schedules テーブルを想定して migration ファイルを作り、migrate を実行すること。
movie_id は movies.id を参照する外部キー(Foreign Key)である。

````jsx
テーブル名: schedules
モデル: App\Models\Schedule.php

```sql
CREATE TABLE IF NOT EXISTS `railway`.`schedules` (
`id` INT NOT NULL AUTO_INCREMENT,
`movie_id` INT NOT NULL,
`start_time` TIME NOT NULL COMMENT '上映開始時刻',
`end_time` TIME NOT NULL COMMENT '上映終了時刻',
`created_at` DATETIME NOT NULL DEFAULT NOW(),
`updated_at` DATETIME NOT NULLEFAULT NOW(),
PRIMARY KEY (`id`),
INDEX `movie_id_idx` (`movie_id` ASC) VISIBLE,
CONSTRAINT `movie_id`
FOREIGN KEY (`movie_id`)
REFERENCES `railway`.`movies` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
````

```

**クリア条件**

1. GET /movies/{id} についてmovies({id})に対応するレコードの情報が含まれていること ok
2. GET /movies/:id についてmovies(:id)に紐づくschedulesのレコード全件分のデータが出力されていること ok
3. Moviesについてschedulesをhas_manyで引けること ok
4. Scheduleの上映開始時間、上映終了時間が h:iの形式で表示されていること ok

アソシエーション

useCurrent と default(now()) の違い

外部キー、**->references('id')->on('users')**は上手くいくけど**->constrained()が上手くいかない～～ ok**

with()という手もある query一回減らせる

[https://www.yoheim.net/blog.php?q=20181104](https://www.yoheim.net/blog.php?q=20181104)

station9

【仕様】
- `GET /admin/schedules` でスケジュール一覧を表示する  ok
- 作品・ID, 作品名を見出し(h2タグ)にし、その下にその作品の開始時刻・終了時刻がリストアップされているような形にする ok
- スケジュールが設定されていない作品は表示しなくてよい ok
- schedulesの全件・全カラムを表示する ok
- 各スケジュールはリンクになっていて、リンク先は `GET /admin/schedules/{id}` ok

## `GET /admin/movies/{id}` にリンクを追加 ok
- `GET /admin/schedules`と同様にその作品に対応する`GET /admin/schedules/{id}`へのリンクを置く ok
- `GET /admin/movies/{id}/schedules/create`へのリンクを追加する ok

- `GET /admin/schedules/{scheduleId}/edit` でスケジュールを編集するためのフォームを表示する
- 開始時刻と終了時刻のフォームがあり、送信を押すと`PATCH /admin/schedules/{id}/update`へ送信される

-  開始時刻と終了時刻のフォームは日付(Y-m-d)と時刻(H:i)でわける

 - それぞれのフォームのnameは以下とする。　

　　　　開始日付　start_time_date　開始時間　start_time_time

　　　　終了日付　end_time_date　終了時間　end_time_time

- movie_idはここでは変更させない（必要なら削除して新規追加してもらう）
- 削除ボタンがあり、同様に確認ダイアログにOKを押すと`DELETE /schedules/{id}/destroy`を送信する
- `PATCH /admin/schedules/{id}/update`でidに対応するschedulesレコードを更新する
- `DELETE /admin/schedules/{id}/destroy`でidに対応するschedulesレコードを削除する
- 物理削除してよい

【画面上の表記とカラム名の対応】
- movie_id: 作品ID
- start_time: 開始時刻
- end_time: 終了時刻
- created_at: 作成日時
- updated_at: 更新日時

**クリア条件**

1. GET /admin/movies/{id}について station2と同じテストケースが通ること
2. GET /admin/movies{id}について movies({id})に対応するscheduleを表示していること
3. GET /admin/movies/{id}/schedules/create
4. POST /admin/movies/{id}/schedules/store に送信されること
5. GET /admin/schedules/{scheduleId}/edit
6. GET /admin/schedules/{scheduleId}/edit - フォーム送信でPATCH /admin/schedules/{scheduleId}/update に送信されること
7. PUT /admin/schedules/{id}/update 渡された時刻でschedule({id})が更新されること
8. DELETE /schedule/{id}/destroy schedulesテーブルから {id} のレコードが物理削除されていること
```
