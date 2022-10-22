#

```js
const xhr = new XMLHttpRequest(),
  method = 'GET',
  url = 'https://weather.tsukumijima.net/primary_area.xml';
// 1 XMLHttpRequestインスタンス生成
xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  // 2 接続情報の設定 指定したURLから    値を取る
  let status = xhr.status;
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (status === 0) {
      console.log(xhr.responseText);
    } else {
      console.log('リクエストエラー');
    }
  }
  console.log('test');
};
xhr.send(); // リクエストが完了したら実行される
```

## XML データを参照する

サンプル)
`js if(xmlhttp.readyState == 4){ if(xmlhttp.readyState == 200){ let elm = xmlhttp.responseXML.documentElement; let node eml.getElementByTagname("タグ名"); console.log(node[0].getAttribute("id名")); } } `

1. xml ファイルの参照、結果の確認
   readystate の値
   4 : done 実行完了
   200 : 正常終了
2. xml のエレメントデータ取得
3. エレメントデータからタグ指定でノードを取得
4. タグに含まれる要素を参照

```js
  <student id="10001" name="nagamine"/>
  let elm = xmlhttp.responseXML.documentElement;
  let node = elm.getElementByTagname("student");
  console.log(node[0].getAttribute("name");
```
