# JavaScriptによるSPARQL利用サンプル(クエリ検索アプリ)

JavaspcriptのみでSPARQLエンドポイントを検索して、検索結果を表形式で表示するサンプルアプリです。

## デモ

以下でアプリを試用出来ます。

[http://uedayou.net/lodosaka/sample_sparql.html]

## 使い方

全てのファイルをWebサーバに置き、ブラウザで simple_sparql.html を開いてください。
テキストフォームにSPARQLクエリを入力して、[Load]ボタンを押すと結果が表示されます。

デフォルトでは、[Linked Open Dataハッカソン関西in大阪SPARQLエンドポイント]が指定されています。
他のエンドポイントを利用したい場合は、simple_sparql.html 内の endpoint 変数にそのURLを指定してください。

  <script type="text/javascript">
  <!-- // 
  // 利用するSPARQLエンドポイントのURLを指定してください
  var endpoint = "http://db.lodosaka.jp/sparql";
  // -->
  </script>

本アプリは、CORS(Cross-Origin Resource Sharing)に対応しているSPARQLエンドポイントのみ利用可能です。

## 利用ライブラリ

- [jQuery]
- [Bootstrap3]
- [bootstrap-modal]
- [SPARQL Timeliner]

## ライセンス

Copyright &copy; 2014 [Linked Open Dataハッカソン関西in大阪]<lodosaka@gmail.com>. Licensed under the [MIT license][mit].

[Linked Open Dataハッカソン関西in大阪]:http://lodosaka.hozo.jp/
[Linked Open Dataハッカソン関西in大阪SPARQLエンドポイント]:http://db.lodosaka.jp/sparql
[http://uedayou.net/lodosaka/sample_sparql.html]:http://uedayou.net/lodosaka/sample_sparql.html
[SPARQL Timeliner]: http://uedayou.net/SPARQLTimeliner
[jQuery]:http://jquery.com/
[Bootstrap3]:http://getbootstrap.com/
[bootstrap-modal]:https://github.com/jschr/bootstrap-modal
[MIT]: http://www.opensource.org/licenses/mit-license.php
