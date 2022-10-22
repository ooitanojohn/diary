---
title: 'Laravel-4'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

## 4. 実現したいことは何か？

[https://fresh-engineer.hatenablog.com/entry/2017/11/30/004729](https://fresh-engineer.hatenablog.com/entry/2017/11/30/004729)

[https://miyabi-lab.space/blog/22](https://miyabi-lab.space/blog/22)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e906714-e098-4a24-8090-ee807f95b356/Untitled.png)

## 5. 自分で調べたことまとめ

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

[https://www.youtube.com/watch?v=tThGPwM1qAI&t=30s](https://www.youtube.com/watch?v=tThGPwM1qAI&t=30s)

station3

- `GET /admin/movies/create` で movies の新規登録画面を表示する ok
- 一般的なフォーム送信で実装する ok
- カラム名は日本語に直して出力する。下記のカラムと表記の対応を参照すること ok
- 画像はそのまま受け取りたいがアップロードする先がすでにあるという想定で URL を受け取る ok
- description は改行を許容する ok
- is_showing はチェックボックスの on/off で受け取る ok
- `POST /admin/movies/store` は新規登録フォーム送信先 ok
- エラーが発生した場合はフォームに戻しその旨を flash メッセージで表示する ok

1. GET /admin/movies/create について 200 を返すこと ok
2. POST /admin/movies/store について GET /admin/movies/create からの送信で 302 を返し、DB への保存ができていること ok
3. POST /admin/movies/store について すでに movies 上に存在するタイトルでフォーム送信すると 302 が返ること ok
4. POST /admin/movies/store について空文字処理ができていること ok
5. POST /admin/movies/store について URL のバリデーションがかかっていること ok

// http リクエスト

[https://qiita.com/gunso/items/94c1ce1e53c282bc8d2f#2http リクエストの構成](https://qiita.com/gunso/items/94c1ce1e53c282bc8d2f#2http%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88%E3%81%AE%E6%A7%8B%E6%88%90)

// http ヘッダ

[https://developer.mozilla.org/ja/docs/Web/HTTP/Headers#メッセージ本文の情報](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers#%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E6%9C%AC%E6%96%87%E3%81%AE%E6%83%85%E5%A0%B1)

// laravel デバッグ

[https://qiita.com/a05kk/items/e05a1508dc562861fcf5](https://qiita.com/a05kk/items/e05a1508dc562861fcf5)

// 放置 validate 日本語化

[https://readouble.com/laravel/6.x/ja/validation-php.html](https://readouble.com/laravel/6.x/ja/validation-php.html)

uuid って何だ？

// fail と多分同じ

[https://laravel.com/docs/8.x/validation#automatic-redirection](https://laravel.com/docs/8.x/validation#automatic-redirection)

// checkbox 何も分からん

[https://zenn.dev/nshiro/articles/a0d4033a4d8332](https://zenn.dev/nshiro/articles/a0d4033a4d8332)

[https://zenn.dev/masa9436/articles/aebe1cd4e448f0](https://zenn.dev/masa9436/articles/aebe1cd4e448f0)

// is_showing の型 tinyint(1) だけど 突っ込んでみる やはり on は許されなかった
value="1" + ひとまずこれ！

[https://qiita.com/gyu_outputs/items/d0ba64928972b7b47582](https://qiita.com/gyu_outputs/items/d0ba64928972b7b47582)

old{{name属性}}で前のデータが保持できる！！

textarea が残らん！！ 放置！！

db 登録行けた～～～やった～～

// リダイレクト発見！

[https://laravel.com/docs/8.x/responses#redirects](https://laravel.com/docs/8.x/responses#redirects)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33dc0a76-c340-44af-b28f-a81b19166e86/Untitled.png)

302 黄色なのか

// unique ID 細かく分からん ok

[https://laravel.com/docs/8.x/validation#rule-unique](https://laravel.com/docs/8.x/validation#rule-unique)

寝すぎた、16:00 再開

null は許されない → hidden を添えるだけで 0|1 できるまじか

station4

`GET /admin/movies/{id}/edit/` で id に対応する movies の編集画面を表示する ok

- migration ファイルを作成し、title に unique 制約を追加する ok
- `GET /admin/movies` に編集ボタンを設置し、そのレコードに対応する編集画面に移動できるようにする ok
- ページを開いたとき、登録済み情報がフォームに入っている状態にする ok
- フォームの仕様や項目名などは登録画面と同様にする ok
- フォームの送信先は`PATCH /admin/movies/{id}/update` ok
- `PATCH /admin/movies/{id}/update` で id に対応する movies レコードを更新する ok
- こちらも仕様やエラー処理など登録時のフォーム送信と同様にする ok

1. GET /admin/movies/{id}/edit について 200 を返すこと ok
2. GET /admin/movies/{id}/edit について HTML を返すこと ok
3. GET /admin/movies/{id}/edit について form タグが存在すること ok
4. GET /admin/movies/{id}/edit についてフォーム内に予め movies({id}) のレコードに対応する値が入っていること ok
5. PATCH /admin/movies/{id}/update について - GET /admin/movies/{id}/edit からの送信で 302 を返し、DB への保存(update)ができている事 ok
6. PATCH /admin/movies/{id} について すでに movies 上に存在するタイトルに変更してフォーム送信するとエラーが返ること ok
7. PATCH /admin/movies/{id}/update についてエラー処理がされていること ok

checkbox がやはりめんどい

html の hidden checkbox は必ず上

// textarea 発見

[https://qiita.com/yukibe/items/8bddeba1150437389eb0](https://qiita.com/yukibe/items/8bddeba1150437389eb0)

// DB 検索更新 && save() || update() メソッド違い

[https://qiita.com/gomaaa/items/91e5cbd319279a2db6ec](https://qiita.com/gomaaa/items/91e5cbd319279a2db6ec)

バリデート無駄にもう一回書かなくていい気はするけど分からんので書く

// redirect まとめ

[https://qiita.com/manbolila/items/767e1dae399de16813fb](https://qiita.com/manbolila/items/767e1dae399de16813fb)

元の所に編集前の内容返すの分からんけどヨシ!

// station 5

【画面の仕様】

- movie 一覧画面に削除ボタンを追加する ok
- 削除ボタンを押すと確認ダイアログが開く ok
- 確認ダイアログに OK で答えるとその ID に対応する`DELETE /admin/movies/{id}/destroy`が送信される ok

【エンドポイントの仕様】

- `DELETE /admin/movies/{id}/destroy`で{id}に対応する movies のレコードを削除する ok
- 物理削除を行う（実際にレコード自体を DELETE クエリで削除する）ok
- 削除に成功したら`GET /admin/movies/`に遷移し削除が完了したことを flash メッセージで表示する ok

**クリア条件**

1. DELETE /admin/movies/{id}/destroy についてリクエストを送ると 302 が返り、movies({id})のレコードが消える ok
2. DELETE /admin/movies/{id}/destroy について {id}のレコードが存在しないとき 404 が返る ok

coreui modal にしたとき css で非表示なせいか id が 1 だ～～～

// modal に値を渡す

[https://weblion303.net/952](https://weblion303.net/952)

// core ui の doc

[https://coreui.io/docs/4.1/components/modal/](https://coreui.io/docs/4.1/components/modal/)

// action に埋め込み

[https://techacademy.jp/magazine/35949](https://techacademy.jp/magazine/35949)

// form action mdn

[https://developer.mozilla.org/ja/docs/Web/API/HTMLFormElement/action](https://developer.mozilla.org/ja/docs/Web/API/HTMLFormElement/action)

// route || cont で 404 abort(404)

[https://www.google.com/search?q=laravel+404+返す&oq=laravel+404&aqs=chrome.3.69i57j0i512l9.8889j0j7&sourceid=chrome&ie=UTF-8](https://www.google.com/search?q=laravel+404+%E8%BF%94%E3%81%99&oq=laravel+404&aqs=chrome.3.69i57j0i512l9.8889j0j7&sourceid=chrome&ie=UTF-8)

station6

【画面の動き】

- 映画作品リストには検索フォームとすべて/公開予定/公開中のラジオボタンが置かれている
- ラジオボタンはデフォルトですべてに設定されている ok
- 検索フォームにキーワードをいれて検索ボタンを押すとタイトルまたは概要にそのキーワードを持つ movies だけに絞り込まれて表示される ok
- 検索フォームが空でも、ラジオボタンを公開予定または公開中に設定して検索ボタンを押すとどちらかの movies だけに絞り込まれて表示される ok
- 検索フォームとラジオボタン両方が変更されているときはそれらの掛け合わせで絞り込まれて表示される ok

【詳細な仕様】

- `GET /movies` にクエリパラメータを渡すと movies を対応した検索条件で絞り込まれた状態のページを表示する ok
- 何も渡されていないときはすべて表示する ok
- `is_showing=1` が渡されているときは公開中のみ、 `is_showing=0` が渡されているときは公開予定のみを表示する ok
- `keyword=xxx` が渡されているときは title または description に"xxx"を含む movies のみ表示する ok

**クリア条件**

1. GET /movies からの検索時について検索キーワードを指定するとそれを含むものだけ表示 ok
2. GET /movies からの検索時についてラジオボタンですべて/公開予定/公開中の切り替えができる ok
3. GET /movies からの検索時についてキーワードを指定し、ラジオボタンを設定して掛け合わせで絞り込みができる ok

// find は主キーのみっぽい

[https://laravel.com/docs/8.x/eloquent#retrieving-single-models](https://laravel.com/docs/8.x/eloquent#retrieving-single-models)

// like 句

[https://akizora.tech/laravel-like-query-3649](https://akizora.tech/laravel-like-query-3649)

// 複合検索

[https://note.com/akina7/n/n72a0cc0cf13b](https://note.com/akina7/n/n72a0cc0cf13b)

# 後で

- checked パラメータを渡したい → blade でパラメータ取得 || c から with でパラメータ渡す

どっちがいいんだろう @if で view でやることにする ok

[https://stackoverflow.com/questions/31324801/lumen-get-url-parameter-in-a-blade-view](https://stackoverflow.com/questions/31324801/lumen-get-url-parameter-in-a-blade-view)

- 絞り込みを model に移行 [https://qiita.com/yuta_sawamura/items/691818b3de5b87432ac9](https://qiita.com/yuta_sawamura/items/691818b3de5b87432ac9)
