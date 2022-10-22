---
title: 'laravel-2'
date: '2022--'
description: ''
tag: ''
author: 'ooitanojohn'
---

# 第 2 週(1/24~1/30)

## 0. 挑戦 Station

Station 1~2

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

## 6. メモ

[自分で調べたことを書きます] ^day = done

1/23

1.movies テーブルに値を注入する seeder

// seederData 作成

php artisan db:seed —class=UserSeeder.php ^23

DatabaseSeeder で call する seeder を記述指定して呼び出す事ができる ^23

php artisan db:seed で DatabaseSeeder 呼び出し ^23

php artisan migrate:fresh —seed DB 再構築 ^23

—force 強制

1/25

2 factory で注入してみる

// factory

[https://laravel.com/docs/8.x/database-testing#defining-model-factories](https://laravel.com/docs/8.x/database-testing#defining-model-factories)

前のテストのデータが後続のテストに干渉しないように、各テストの後にデータベースをリセットする

**[各テスト後のデータベースのリセット](https://laravel.com/docs/8.x/database-testing#resetting-the-database-after-each-test)**

**毎回 DB リセットしないと後続に影響あるぞ書け**

テストクラスでトレイトを使用 → トレイトについては調べて明日書きたいと思います

とは？

↓ これやれ

// test

[https://laravel.com/docs/8.x/testing](https://laravel.com/docs/8.x/testing)

PHPUnit を使用してテスト**`phpunit.xml`**

既に使える設定されてる

テスト用のヘルパーメソッドがある(おそらく assert~から始まるメソッド?)

**tests : 内に`Feature`** and **`Unit`**

unit : **単体テスト Laravel アプリケーションを起動しないため、アプリケーションのデータベースやその他のフレームワークサービスにアクセスできない**

feature : 機能テスト **ほとんどのテストは機能テストである必要があり、システム全体が意図したとおりに機能している = 信頼性が高い**

db.movies feature 作成 : php artisan make:test moviesDatabaseRefresh

テスト実行 : **php artisan test**

テストを実行すると、ファイルで定義されている環境変数のために、Laravel は自動的に[構成環境](https://laravel.com/docs/8.x/configuration#environment-configuration)を.env.testing に設定

テスト中にキャッシュ、セッション保持されない! ???作成からされないって事?

array ドライバー : db と test プログラムを仲介するドライバ

他にも多々ある [https://qiita.com/ytake/items/fbb1b97cb378ac998b1f](https://qiita.com/ytake/items/fbb1b97cb378ac998b1f)

// env

[https://laravel.com/docs/8.x/configuration#environment-configuration](https://laravel.com/docs/8.x/configuration#environment-configuration)

構成環境とは？ DB_NAME etc..などの設定値

ex)本番サーバーで使用するのとは異なるキャッシュドライバーをローカルで使用したい場合

**.env : local | origin config/env で設定値変更可**

**.env.example 初めに環境作成した際に残しておく defalut 値**

**.env.testing テスト実行時に使用**

テスト実行時は.env.testing に設定

`array`ドライバに自動的に設定 ??

他のテスト環境構成値を変更(.env.**testing??phpunit.xml??**)した時は artisan する前に**config:clear してね**

**`.env.testing`**プロジェクトのルートにファイルを作成 ???? 何の？？？

[https://laravel.com/docs/8.x/testing#the-env-testing-environment-file](https://laravel.com/docs/8.x/testing#the-env-testing-environment-file)

tests/**CreatesApplication 消すな移動するな**

テストを実行する前にブートストラップするメソッドが含まれる

Laravel の並列テスト機能などの一部の機能はそれに依存している

**`php artisan make:test movieDatabaseRefresh`**

—unit option で unite 無しで feature

トレイトを使用 → **`php artisan test?`**

// 各機能に出てくる php の拡張機能

faker : factory ランダムな単語を返す

DotEnv.php :

// git alias 登録

調べる事

トレイト : [https://qiita.com/kazuhei/items/dd4e275c03eb6916f522](https://qiita.com/kazuhei/items/dd4e275c03eb6916f522#:~:text=%E3%83%88%E3%83%AC%E3%82%A4%E3%83%88%E3%81%AF%E3%82%AF%E3%83%A9%E3%82%B9%E3%81%A8%E4%BC%BC,%E3%81%A7%E3%81%8D%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82)

キャッシュ : [https://blog.capilano-fw.com/?p=1344#i-40](https://blog.capilano-fw.com/?p=1344#i-40)

3 model で usefactory もしてみる

1/26 ,1/27,

4 先に view にファイルを渡してみる

// view

.blade.php ファイルを作成するコマンドはない

touch resources/views/index.blade.php

php artisan view キャッシュ

// blade

[https://laravel.com/docs/8.x/blade](https://laravel.com/docs/8.x/blade)

doc の試してたテンプレートコード要らなくなってきたので消した

rm で welcome,Flight 検索まとめて消せるように

2.1 Station1 の movies に「公開年」「概要」「上映中かどうか」のカラムを追加する

カラムを movie.migration に追記

型指定 :

[https://laravel.com/docs/8.x/migrations#available-column-types](https://laravel.com/docs/8.x/migrations#available-column-types)

db 再構成 : php artisan migrate:fresh

boolean は mysql だと tinyint(1)になる

[https://qiita.com/ritukiii/items/3a3667391d4d65678d82](https://qiita.com/ritukiii/items/3a3667391d4d65678d82)

2.1.1 movies test データを再追加

model の use factory → ファクトリを使うって事 doc 見当たらん

factory で追加

factory 分かってきた

faker でのデータ挿入の仕方

[https://fakerphp.github.io/formatters/](https://fakerphp.github.io/formatters/)

[https://fakerphp.github.io/formatters/](https://fakerphp.github.io/formatters/)

php artisan tinker で factory お試し生成

php 各 artisan コマンドで生成したファイルはコマンドで rm していいのか

またキャッシュクリアをする事でいい感じになるのか

複数形 DB 名

単数

DB 周り慣れてきたらこれで良さそう

php artisan make:model Post -a

2.2 GET /admin/movies` で現在登録されている movies の内容をすべて出力する

管理画面とクライアント側に分ける為、ルーティングを増やす

2.3 GET /admin/movies について HTML の中には movies テーブルのカラムすべてが表示されていること

add : index カラム

2.4 GET /admin/movies について HTML の中には true/false(あるいは 1/0)が含まれないこと

artisan cache

php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear

2.5

1/29

大文字、小文字間違いだった

後でまとめる事！

faker 完全に理解した

blade :

デフォルトでは、ブレード**`{{ }}`**ステートメントは PHP の**`htmlspecialchars`**関数を介して自動的に送信され、XSS 攻撃を防ぎます

[https://laravel.com/docs/8.x/blade#blade-and-javascript-frameworks](https://laravel.com/docs/8.x/blade#blade-and-javascript-frameworks)

この例では、**`@`**シンボルは Blade によって削除されます。ただし、**`{{ name }}`**式は Blade エンジンによって変更されないままであるため、JavaScript フレームワークでレンダリングできます???

フォーム

[https://laravel.com/docs/8.x/blade#method-field](https://laravel.com/docs/8.x/blade#method-field)

HTML フォームは、、、またはリクエストを作成できないため**`PUT`**、これらの HTTP 動詞をスプーフィングするために非表示フィールドを追加する必要があります。Blade ディレクティブは、次のフィールドを作成できます。**`PATCHDELETE_method@method` ??**

**`@error`**ディレクティブを使用すると、特定の属性に検証エラーメッセージが存在するかどうかをすばやく確認できます[。](https://laravel.com/docs/8.x/validation#quick-displaying-the-validation-errors)**`@error`**ディレクティブ内で、**`$message`**変数をエコーしてエラーメッセージを表示できます。 ??

// 調べる

traite

デザインパターン facade dao

ファイル追加の度に権限更新どうする？？

画像はそのまま受け取りたいがアップロードする先がすでにあるという想定で URL を受け取る とは？ →

description は改行を許容する → textarea

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
