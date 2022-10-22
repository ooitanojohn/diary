# ssh とは

- 公開鍵認証
- パスワード認証

セキュア通信とは暗号化された通信　第三者に見られても暗号化されているのでリスク減

# ssh-keygen とは

- 公開鍵 秘密鍵 のペアを作成するコマンド
- 二段階認証のパスフレーズも設定可能

# scp コマンド

- 公開鍵を送信する

# ssh config

Host ssh コマンド実行名
Hostname 接続先サーバのホスト名 or IP
User 接続先の user 名
Port ポート指定するなら
IdentityFile ~/.ssh/秘密鍵の暗号方式
