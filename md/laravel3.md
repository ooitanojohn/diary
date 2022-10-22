---
title: 'Laravel-3'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

# 第 3 週(1/31~2/6)

## 0. 挑戦 Station

Station3~5

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

ルーティング、マイグレーション

laravel の文法

route まとめ

url 直接叩く get redirect

url パラメータ 同様の処理 get メソッド上が優先

post フォーム呼び指し post メソッド

blade

{{ }} 画面に出力 サニタイズ etc.. 辺りは??

@if (条件式)

@else

@endif

## 6. メモ

[自分で調べたことを書きます]

2/2

form 送信先で処理行うで良さげ

理解後 breeze へ移行

// 調べていく事

DB への保存

画像はそのまま受け取りたいがアップロードする先がすでにあるという想定で URL を受け取る とは？ → `enctype="multipart/form-data"` の tmp_name or text

アップロードする先がすでにあるという想定 → API , web 上に置いてある画像データを利用

temp で一時的に $files に上がるのは分かる、さて larevel ではどう処理する?

text で url

[https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/file#using_file_inputs](https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/file#using_file_inputs)

description は改行を許容する → textarea

[https://laravel.com/docs/8.x/validation#introduction](https://laravel.com/docs/8.x/validation#introduction)

普通に書いてた

[https://laravel.com/docs/8.x/validation#introduction](https://laravel.com/docs/8.x/validation#introduction)

これを行うには**`validate`**、オブジェクトによって提供されるメソッドを使用し**`Illuminate\Http\Request`**ます。検証ルールに合格すると、コードは正常に実行され続けます。

url のバリデート RFC というものがある

[http://php.o0o0.jp/article/info-validation](http://php.o0o0.jp/article/info-validation)

検証ルール

[https://laravel.com/docs/8.x/validation#available-validation-rules](https://laravel.com/docs/8.x/validation#available-validation-rules)

title 被っていたら移行のバリデートスキップ どうなの？

**[フィールドに特定の値がある場合の検証のスキップ](https://laravel.com/docs/8.x/validation#skipping-validation-when-fields-have-certain-values)**

最初の検証が失敗した後、属性に対する検証ルールの実行を停止したい場合があります。これを行うには、**`bail`**ルールを属性に割り当てます。

空文字 + url + unique + bail[title]

従来の HTTP リクエスト中に検証が失敗した場合、前の URL へのリダイレクト応答が生成されます

すべての検証エラーと[リクエスト入力](https://laravel.com/docs/8.x/requests#retrieving-old-input)が自動的に[セッションにフラッシュされ](https://laravel.com/docs/8.x/session#flash-data)ます

insert :

[https://laravel.com/docs/8.x/eloquent#inserts](https://laravel.com/docs/8.x/eloquent#inserts)

flash メッセージの保存場所 :

http 値受け取り サービスコンテナで自動でやってる？

[https://laravel.com/docs/8.x/container](https://laravel.com/docs/8.x/container)

route 確認

route : list

station 3 仕様 :

- `GET /admin/movies/create` で movies の新規登録画面を表示する ok
- 一般的なフォーム送信で実装する ok
- カラム名は日本語に直して出力する。下記のカラムと表記の対応を参照すること ok
- 画像はそのまま受け取りたいがアップロードする先がすでにあるという想定で URL を受け取る url[str] ok
- description は改行を許容する ok
- is_showing はチェックボックスの on/off で受け取る ok
- `POST /admin/movies/store` は新規登録フォーム送信先 ok
- エラーが発生した場合はフォームに戻しその旨を flash メッセージで表示する ok

1. POST /admin/movies/store について GET /admin/movies/create からの送信で 302 を返し、DB への保存ができていること ok → 関数内で return index | route で redirect

form で store に送信 ~~or form で create に送信 ?~~ → laravel のバリデートの仕様を確認

302 → redirect どこに？ admin/movies

DB への保存 contoller なのか route なのか

1. POST /admin/movies/store について すでに movies 上に存在するタイトルでフォーム送信すると 302 が返ること
2. POST /admin/movies/store について空文字処理ができていること
3. POST /admin/movies/store について URL のバリデーションがかかっていること

validate → laravel 調べる

302 → どこに？ create

station 4 仕様 :

登録済み情報がすでに入っている編集フォームとその送信先となる PATCH メソッド

`GET /admin/movies/{id}/edit/` で id に対応する movies の編集画面を表示する

- migration ファイルを作成し、title に unique 制約を追加する → 重複禁止
- `GET /admin/movies` に編集ボタンを設置し、そのレコードに対応する編集画面に移動できるようにする → edit リンク
- ページを開いたとき、登録済み情報がフォームに入っている状態にする
- フォームの仕様や項目名などは登録画面と同様にする
- フォームの送信先は`PATCH /admin/movies/{id}/update`
- `PATCH /admin/movies/{id}/update` で id に対応する movies レコードを更新する
- こちらも仕様やエラー処理など登録時のフォーム送信と同様にする

1. GET /admin/movies/{id}/edit について 200 を返すこと
2. GET /admin/movies/{id}/edit について HTML を返すこと
3. GET /admin/movies/{id}/edit について form タグが存在すること

→ view get

1. GET /admin/movies/{id}/edit についてフォーム内に予め movies({id}) のレコードに対応する値が入っていること

all form value

1. PATCH /admin/movies/{id}/update について - GET /admin/movies/{id}/edit からの送信で 302 を返し、DB への保存(update)ができているこ

302 movies DB

1. PATCH /admin/movies/{id} について すでに movies 上に存在するタイトルに変更してフォーム送信するとエラーが返ること

unique エラー処理とは？？？

1. PATCH /admin/movies/{id}/update についてエラー処理がされていること

station5 仕様 :

-movie 一覧画面に削除ボタンを追加する → 同様

- 削除ボタンを押すと確認ダイアログが開く → js alert ? 何で？laravel での仕様見る
- 確認ダイアログに OK で答えるとその ID に対応する`DELETE /admin/movies/{id}/destroy`が送信される ok or no → post destoroy

- `DELETE /admin/movies/{id}/destroy`で{id}に対応する movies のレコードを削除する → contoller ?
- 物理削除を行う（実際にレコード自体を DELETE クエリで削除する）→ 論理削除カラムなし no update
- 削除に成功したら`GET /admin/movies/`に遷移し削除が完了したことを flash メッセージで表示する → if(delete) true header movies flash メッセージ laravel 検索

// 調べる

traite

デザインパターン facade dao

ファイル追加の度に権限更新どうする？？

// ボケて model 消してしまった際

[https://momozo.tech/2018/08/07/rm 削除したファイルを lsof で復元する/](https://momozo.tech/2018/08/07/rm%E5%89%8A%E9%99%A4%E3%81%97%E3%81%9F%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E3%82%92lsof%E3%81%A7%E5%BE%A9%E5%85%83%E3%81%99%E3%82%8B/)

// cmd memo

`php artisan route:list`

// root/sh

docker のコンテナ in .sh 作る ^23

root/sh/に.sh 作成 ^23

// ailes 登録する

git

クロージャ : ulr などのパラメータを関数の引数に入れること?

// やりたいこと

dd() = vardump()

表示してページネーションつけたい

並び替え

検索

絞り込み

会員画面

管理画面

デザイン TOHO シネマズを模写

[https://hlo.tohotheater.jp/net/movie/TNPI3090J01.do](https://hlo.tohotheater.jp/net/movie/TNPI3090J01.do)
