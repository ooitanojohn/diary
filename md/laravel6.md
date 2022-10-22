---
title: 'Laravel-6'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

## 5. 自分で調べたこと

[自分で調べたことを書きます]

// validate 型指定

[https://laravel.com/docs/8.x/validation#available-validation-rules](https://laravel.com/docs/8.x/validation#available-validation-rules)

// column 型指定

[https://laravel.com/docs/8.x/migrations#available-column-types](https://laravel.com/docs/8.x/migrations#available-column-types)

## 6. メモ

[自分で調べたことを書きます]

station9

【仕様】

- `GET /admin/schedules` でスケジュール一覧を表示する ok
- 作品・ID, 作品名を見出し(h2 タグ)にし、その下にその作品の開始時刻・終了時刻がリストアップされているような形にする ok
- スケジュールが設定されていない作品は表示しなくてよい ok
- schedules の全件・全カラムを表示する ok
- 各スケジュールはリンクになっていて、リンク先は `GET /admin/schedules/{id}` ok

## `GET /admin/movies/{id}` にリンクを追加 ok

- `GET /admin/schedules`と同様にその作品に対応する`GET /admin/schedules/{id}`へのリンクを置く ok
- `GET /admin/movies/{id}/schedules/create`へのリンクを追加する ok

- `GET /admin/schedules/{scheduleId}/edit` でスケジュールを編集するためのフォームを表示する ok
- 開始時刻と終了時刻のフォームがあり、送信を押すと`PATCH /admin/schedules/{id}/update`へ送信される ok

- 開始時刻と終了時刻のフォームは日付(Y-m-d)と時刻(H:i)でわける ok

- それぞれのフォームの name は以下とする。ok

開始日付　 start_time_date 　開始時間　 start_time_time ok

終了日付　 end_time_date 　終了時間　 end_time_time ok

- movie_id はここでは変更させない（必要なら削除して新規追加してもらう）ok
- 削除ボタンがあり、同様に確認ダイアログに OK を押すと`DELETE /schedules/{id}/destroy`を送信する ok
- `PATCH /admin/schedules/{id}/update`で id に対応する schedules レコードを更新する ok
- `DELETE /admin/schedules/{id}/destroy`で id に対応する schedules レコードを削除する ok
- 物理削除してよい ok

【画面上の表記とカラム名の対応】

- movie_id: 作品 ID
- start_time: 開始時刻
- end_time: 終了時刻
- created_at: 作成日時
- updated_at: 更新日時

**クリア条件**

1. GET /admin/movies/{id}について station2 と同じテストケースが通ること ok
2. GET /admin/movies{id}について movies({id})に対応する schedule を表示していること ok
3. GET /admin/movies/{id}/schedules/create ok
4. POST /admin/movies/{id}/schedules/store に送信されること ok
5. GET /admin/schedules/{scheduleId}/edit ok
6. GET /admin/schedules/{scheduleId}/edit - フォーム送信で PATCH /admin/schedules/{scheduleId}/update に送信されること ok
7. PUT /admin/schedules/{id}/update 渡された時刻で schedule({id})が更新されること ??
8. DELETE /schedule/{id}/destroy schedules テーブルから {id} のレコードが物理削除されていること ok

station10

【ページの仕様】

- 映画作品ページ`/movies/{id}`に以下 3 つを追加する ok
- 「座席を予約する」ボタン ok
- 「座席を予約する」ボタンを押すと`/movies/{movie_id}/schedules/{schedule_id}/sheets`に飛ぶ ok
- このときクエリパラメータで日付(date)を渡す ok

show

/movies/{movie_id}/schedules/{schedule_id}/sheets

- `/movies/{movie_id}/schedules/{schedule_id}/sheets`は座席表になっている ok
- 日付を受け取るが、この station では以前作成した座席表ページと同じ内容でよい ok
- 座席表の番号はリンクになっていて、クリックすると座席予約フォームに飛ぶ ok
- パスは `/movies/:movie_id/schedules/:schedule_id/reservations/create` ok
- このときクエリパラメータで日付・座席番号(sheetId)を渡す ok

create

- 座席予約フォームは以下の項目を受け取る。パスやクエリパラメータで渡ってくるものは hidden 要素にしつつ文字として表示しておく ok
- 映画作品(movie_id) ok
- 上映スケジュール(schedule_id) ok
- 座席(sheet_id) ok
- 日付 ok
- 予約者氏名 ok
- 予約者メールアドレス: メールアドレスとして有効な文字列かどうかをバリデーションする ok

- 予約の登録処理が終わったら予約完了ページ`/movies/:movie_id/`に飛び、フラッシュメッセージで「予約が完了しました」と表示する ok
- 送信時にすでに同じスケジュールの同じ座席に予約があったら「その座席はすでに予約済みです」と表示し、 `/movies/:movie_id/schedules/:schedule_id/sheets?date=YYYY-MM-DD` に飛ばす ok

【エンドポイントの仕様】

- `GET /movies/:movie_id/schedules/:schedule_id/sheets` ok
- クエリパラメータとして日付(date)を必須で受け取る ok
- 座席表を返す ok
- `GET /movies/:movie_id/schedules/:schedule_id/reservations/create` ok
- クエリパラメータとして日付(date)と座席番号(sheet_id)を受け取る ok
- すでにパスやクエリパラメータで受け取っている情報は hidden 要素としてセットしておき文字だけ表示しておく ok
- フォーム入力欄はメールアドレスと名前だけ用意する ok
- メールアドレスはメールアドレスとして正しい形式かどうかを確認する ok
- フォーム送信先は `POST /reservations/store` ok
- `POST /reservations/store` ok
- schedule_id, sheet_id, name, email, date を受けとり reservation テーブルに保存する ok
- エラーになっても 500 を返さない、ok

【テーブル設計】
以下のようなテーブル構造を作る migration ファイルを作って migrate する。ok
複合ユニークキーが設定されていることに注意する。ok

````jsx
テーブル名 reservations
モデル App/Models/Reservation.php

```sql
CREATE TABLE IF NOT EXISTS `ph23_sample`.`reservations` (
`id` INT NOT NULL AUTO_INCREMENT,
`date` DATE NOT NULL,
`schedule_id` INT NOT NULL,
`sheet_id` INT NOT NULL,
`email` VARCHAR(255) NOT NULL COMMENT '予約者メールアドレス',
`name` VARCHAR(50) NOT NULL COMMENT '予約者名',
`created_at` DATETIME NULL DEFAULT NOW(),
`updated_at` DATETIME NULL DEFAULT NOW(),

PRIMARY KEY (`id`),
INDEX `reservation_schedule_id_idx` (`schedule_id` ASC) VISIBLE,
INDEX `reservation_sheet_id_idx` (`sheet_id` ASC) VISIBLE,
複合ユニーク制約
UNIQUE INDEX `reservation_schedule_sheet_unique` (`date` ASC, `schedule_id` ASC, `sheet_id` ASC) VISIBLE,
1対多
CONSTRAINT `reservation_schedule_id`
FOREIGN KEY (`schedule_id`)
REFERENCES `railway`.`schedules` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION,
1対多
CONSTRAINT `reservation_sheet_id`
FOREIGN KEY (`sheet_id`)
REFERENCES `railway`.`sheets` (`id`)
ON DELETE NO ACTION
ON UPDATE NO ACTION)
````

```

**クリア条件**

1. GET /movies/:id ここまでのstationの仕様を満たしていること ok
2. GET /movies/:id 「座席を予約する」ボタンが存在すること ok
3. GET /movies/:movie_id/schedules/:schedule_id/sheets - クエリパラメータがないとき400レスポンスを返していること 404で代替
4. GET /movies/:movie_id/schedules/:schedule_id/sheets - dateが渡されていれば200を返す ok
5. GET /movies/:movie_id/schedules/:schedule_id/reservations/create - date, sheet_idの両方があるときだけ200を返すこと - date, sheet_idのどちらかまたは両方が渡されていないとき200を返していないこと - メールアドレス入力フォームではメールアドレスの形式チェックが行われていること - OK: techbowl@example.com a@a.a a.a@a.a - NG: a@a bbb ccc ok
6. GET /movies/:movie_id/schedules/:schedule_id/reservations/create - date, sheet_idの両方があるときだけ200を返すこと ok
7. GET /movies/:movie_id/schedules/:schedule_id/reservations/create - date, sheet_idのどちらかまたは両方が渡されていないとき200を返していないこと ok
8. GET /movies/:movie_id/schedules/:schedule_id/reservations/create - メールアドレス入力フォームではメールアドレスの形式チェックが行われていること - OK: techbowl@example.com a@a.a a.a@a.a - NG: a@a bbb ccc@ @ddd js側ではやってない
9. GET /movies/:movie_id/schedules/:schedule_id/reservations/create - form送信時にmovie_id, schedule_id, sheet_id, name, emailのすべてを送信するようになっていること ok
10. POST /reservations/store 重複予約時、リダイレクトしてエラーを表示すること ok
11. GET /movies/:movie_id/schedules/:schedule_id/reservations/create - `POST /reservation/store` - schedule_id, sheet_id, name, emailのすべてがあるときだけ200を返す - DBのunique制約にかかったとき400を表示する ??? unique → redirectしてmessage??

sheetに対して予約は多

scheduleに対して予約は多

station11

【ページの仕様】
- 予約フォームに飛ぶリンクは予約可能な席のみ有効になっていて、予約できない席にはリンクがない
- クエリパラメータで予約できない席を指定することもできるが、予約できない席を指定して予約しても予約できないようにエラー表示をする  create → 404　ok
- すでに予約が入っている席は背景をグレーにして予約済みであることがはっきりわかるようにする
- ページを開くたびに全座席に対して1回ずつのDBアクセスではなく、全座席を取得するようなDBアクセス1回で収める ok

**クリア条件**

1. /movies/:movie_id/schedules/:schedule_id/sheets について - station10の仕様を満たしていること ok
2. /movies/:movie_id/schedules/:schedule_id/sheets について - N+1問題が起きていないこと
3. 怪しい

station12

【ページの仕様】
- `/admin/reservations/` 予約一覧 ok
- これから上映予定のすべての予約を出力する ok
- 上映が終了した予約は表示しない ok
- 各レコードについて映画作品・座席・日時・名前・メールアドレスを出力する ok

- `/admin/reservations/create` 予約追加  ok
- ユーザ側予約画面と全く同じようにバリデーションやエラーの動きを作る ok
- この画面でエラーが起きた場合、エラー表示のフラッシュメッセージを出しつつ`/admin/reservations/`に戻す ok

- `/admin/reservations/:id` 予約詳細・編集 ok
- idに紐づくレコードを編集する ok
- 映画作品・座席・日時・名前・メールアドレスについてのフォームを置く ok
- フォーム送信後、予約済の座席に変更するような内容だった場合エラーを表示する
- その他、Railsデフォルトのエラーが出ないようにする ?
- 削除ボタンも置いておく ok

【エンドポイントの仕様】
- `GET /admin/reservations/` 予約一覧 ok
- `GET /admin/reservations/create` 予約追加フォーム表示 ok
- `POST /admin/reservations/` 予約追加実行 ok
- ユーザ側の予約フォームのアクションと同じようにつくる
- `GET /admin/reservations/:id` 予約詳細・編集フォーム表示 ok
- `PUT /admin/reservations/:id` 予約編集実行 ok
- 重複した予約を作ろうとするとエラーになる ok
- `DELETE /admin/reservations/:id` 予約削除実行 ok

**クリア条件**

1. `GET /admin/reservations/` - 200が返ること - 予約を全件出力していること ok
2. `GET /admin/reservations/new` - 200が返ること - schedule_id, sheet_id, name, emailのすべてを受け取るフォームがあること ok
3. `POST /admin/reservations/` - movie_id,schedule_id, sheet_id, name, emailのすべてがあるときだけ200にすること - そうでないときは400を返すこと - DBのunique制約にあたったときなどは400を返すこと ok
4. `GET /admin/reservations/:id` 予約詳細・編集フォーム表示 - movie_id, schedule_id, sheet_id, name, emailのすべてを送信するフォームがあること - DB上のデータがすでにフォームに入っていること
5. `PUT /admin/reservations/:id` 予約編集実行 - movie_id, schedule_id, sheet_id, name, emailのすべてがあるときだけ200にすること - DBのunique制約にあたったときなど400を返すこと - 変更することで他の予約と全く同じような予約になるような動作は必ず確認する
6. `DELETE /admin/reservations/:id` - reservationテーブルから:idのレコードを物理削除していること ok

reservationテーブルのdateカラム : 上映日時

station13

「再来月からスクリーンが2室増える」
「スクリーンは1つだけじゃなかったのか？」
「修理中だった。終わったので3室で運営するようになる」
「はぁ」
「客は3つのどれにいくかはチケットを見てわかるようになっているから予約時は知らなくていい」
「なるほど」
「複数のスクリーンで同じ作品を上映することはない。たぶん」
「ないということにするから」
「たぶんない。よほどの人気作になったら他のシネコンに行っちゃう。うちはうち」

スクリーンを区別しなければならなくなった。
各スクリーンで上映する作品を変えるのはスケジュールを変更するタイミングと同じらしいので管理画面はいらなそう。
座席のレイアウトはすべて同じらしい。作品と紐づくときっとひどいことになるので座席と紐付けることにする。

----

同じ構成の座席を持つスクリーン1,2,3を区別できるように実装しましょう。
screensテーブルの構成も考えて実装してみてください。
同じ映画館別スクリーンの同じ座席で予約済みであると誤判定しないか確認してみましょう

【仕様】
- スクリーン1,2,3でそれぞれ別の作品を上映している
- スクリーン1-3のどこで上映されるかは、映画館にいくまでユーザが知る必要はないので画面に出す必要はない
- 同じ時間帯であってもスクリーンが別であれば同じ席番号も予約できる
- スクリーン1のA-1とスクリーン2のA-1は別物なので予約できる

**クリア条件**

1. ユーザの入力項目、フォームなどには変わりがない
2. 自分でscreensテーブルの定義を考え、migrationを作成していること
3. 予約に関してこれまでの仕様が満たされていること
```
