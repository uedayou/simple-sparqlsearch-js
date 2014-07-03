# JavaScriptによるSPARQL利用サンプル(クエリ検索アプリ)

JavaspcriptのみでSPARQLエンドポイントを検索して、検索結果を表形式で表示するサンプルアプリです。

## デモ

以下でアプリを試用出来ます。

<http://uedayou.net/simple-sparqlsearch-js/simple_sparql.html>

## 使い方

全てのファイルをWebサーバに置き、ブラウザで simple_sparql.html を開いてください。
テキストフォームにSPARQLクエリを入力して、「Load」ボタンを押すと結果が表示されます。

デフォルトでは、[DBpedia日本語版SPARQLエンドポイント](http://ja.dbpedia.org/sparql)が指定されています。
他のエンドポイントを利用したい場合は、simple_sparql.html 内の endpoint 変数にそのURLを指定してください。

  <script type="text/javascript">
  <!-- // 
  // 利用するSPARQLエンドポイントのURLを指定してください
  var endpoint = "http://db.lodosaka.jp/sparql";
  // -->
  </script>

SPARQLエンドポイントは、CORS(Cross-Origin Resource Sharing)に対応したもののみ利用できます。

## 利用ライブラリ

- [jQuery]
- [Bootstrap3]
- [bootstrap-modal]
- [SPARQL Timeliner]

## ライセンス

Copyright &copy; 2014 [Linked Open Dataハッカソン関西in大阪]. Licensed under the [MIT license][mit].

[Linked Open Dataハッカソン関西in大阪]:http://lodosaka.hozo.jp/
[Linked Open Dataハッカソン関西in大阪SPARQLエンドポイント]:http://db.lodosaka.jp/sparql
[SPARQL Timeliner]: http://uedayou.net/SPARQLTimeliner/
[jQuery]:http://jquery.com/
[Bootstrap3]:http://getbootstrap.com/
[bootstrap-modal]:https://github.com/jschr/bootstrap-modal
[MIT]: http://www.opensource.org/licenses/mit-license.php
