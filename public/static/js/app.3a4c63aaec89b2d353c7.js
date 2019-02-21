webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(87);var r=t(14)(t(48),t(95),"data-v-40a436ee",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-3498393a",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-2d079afc",null);n.exports=r.exports},44:function(n,e,t){t(88);var r=t(14)(t(47),t(96),"data-v-77efa097",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),f=t.n(d),m=t(40);t.n(m);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 履歴書をご覧いただきありがとうございます。\n* 蔡　恒（サイ・コウ）と申します。\n* 東京在住、来日7年目の中国人です。\n* 今はエンジニア一年目です。\n* さて、今から履歴書を作っていきましょう。\n*/\n\n/* まず基本のエフェクトをつけて */\n* {\n  transition: all .2s;\n}\n/* 白のバックグラウンドはつまらないから，ちょっと色を付けてみる */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,43,54);\n}\n/* 文字は枠に近すぎるから、ちょっと調整する */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw; height: 90vh;\n}\n/* コードをハイライトで表示し */\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 少しおしゃれにして、3Dのエフェクトも追加しよう*/\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* さて、エディターがないとだめですね */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 48vw; height: 90vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* いざ準備完了、今から履歴を描きますね */\n\n\n","\n/* ああ、この履歴書なんかものたりないですね\n * そうだ！これは Markdown で記述された履歴書です。HRの方にもっと見やすくしよう\n * よっこいしょ HTML で表示する\n */\n",'\n/* さてさてもう少し HTML を整える */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"蔡　恒（サイ・コウ）\n----\n\n東京に住んでいる中国人です。\n法政大学文学部卒業です。\n今はエンジニアとして働いています。\nまだ一年生かつ文系出身ですので、\nわからないことが多いですが、\nプログラミング知識について一生懸命勉強しています\n\nEducational Background\n----\nHOSEI UNIVERSITY 2014-2018\n\nSkills\n----\n\n* Java\n* Spring boot\n* Mybatis\n* HTML\n* CSS\n* JavaScript\n* MySQL, Oracle\n* and etc..\n\nStudying Program\n----\n\n* Python\n* Vue.js\n* Salesforce\n\nCertification\n----\n\n* Salesforce platform developer I\n* Business Japanese Proficiency Test J1 Level\n* Japanese Language Proficiency Test N1\n\nCareer\n----\n株式会社ソフトユージング　在籍中\nhttps://softusing.co.jp/\n\nProject\n----\n1. Web勤怠システム　2018年9月 – 2019年1月<br>\n    OS：Linux<br>\n    Test－DB：MariaDB<br>\n    Front－End：Bootstrap, Thymeleaf, JQuery<br>\n    Back-End:Spring-boot, Mybatis and etc..<br>\n\n    コンプライアンスの関係で詳しくご説明できませんが、<br>\n    大雑把に自分の経験を説明致します。<br>\n    基本設計から始まり、詳細設計と製造を担当致しました。<br>\n    フロントエンドのデザインはもちろん、<br>\n    バックエンドの開発も一人で行いました。<br>\n    フロントはBootstrap,ThymeleafとJQueryで構築し、<br>\n    バックエンドはspring bootとMybatisで作りました。<br>\n    OSはLinux，使用するDBはoracle 12c r2でした。<br>\n    インフラの構築も一人で担当しまして、０から作りました。<br>\n\n2. 某大手自動車メーカーのヨーロッパ販売システムの改修と新規画面の追加　2019年1月 – 現在<br>\n    OS：Linux<br>\n    DB：Oracle 11c<br>\n    言語：Java<br>\n\n    改修案件でありながら、新規画面の追加も入っております。<br>\n    詳細設計ー製造ー単体テストー結合テストーシステムテストーユーザー受入テストを一貫して、携わっております。<br>\n    多言語の対応、現場スタッフの通訳もしております。<br>\n    この度の案件は来年１月までの契約です。<br>\n\nLink\n----\n\n* [GitHub](https://github.com/lexluthor0304)\n* [個人サイト](https://tokugai.com)\n\n> Fork on [GitHub](https://www.strml.net/)\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),u=t.n(a),l=t(42),c=t.n(l),d=t(41),f=t.n(d),m=t(40);t.n(m);e.default={name:"app",components:{StyleEditor:c.a,ResumeEditor:f.a},data:function(){return{interval:40,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* Inspired by http://strml.net/\n* 履歴書をご覧いただきありがとうございます。\n* 蔡　恒（サイ・コウ）と申します。\n* 東京在住、来日7年目の中国人です。\n* 今はエンジニア一年目です。\n* さて、今から履歴書を作っていきましょう。\n*/\n\n/* まず基本のエフェクトをつけて */\n* {\n  transition: all .3s;\n}\n/* 白のバックグラウンドはつまらないから，ちょっと色を付けてみる */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 文字は枠に近すぎるから、ちょっと調整する */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 高さを調整する */\n.styleEditor {\n  height: 45vh;\n}\n/* コードをハイライトで表示し */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 少しおしゃれにして、3Dのエフェクトも追加しよう*/\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* さて、エディターがないとだめですね */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* いざ準備完了、本番の履歴書にはいりますね */\n\n\n","\n/* ああ、この履歴書なんかものたりないですね\n * そうだ！これは Markdown で記述された履歴書です。HRの方にもっと見やすくしよう\n * よっこいしょ HTML で表示する\n */\n",'\n/* さてさてもう少し HTML を整える */\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"蔡　恒（サイ・コウ）\n----\n\n東京に住んでいる中国人です。\n法政大学文学部卒業です。\n今はエンジニアとして働いています。\nまだ一年生かつ文系出身ですので、\nわからないことが多いですが、\nプログラミング知識について一生懸命勉強しています\n\nSkills\n----\n\n* Java\n* Spring boot\n* Mybatis\n* HTML\n* CSS\n* JavaScript\n* MySQL, Oracle\n* and etc..\n\nStudying Program\n----\n* Python\n* Vue.js\n* Salesforce\n\nCertification\n----\n* Salesforce platform developer I\n* Business Japanese Proficiency Test J1 Level\n* Japanese Language Proficiency Test N1\n\nCareer\n----\n株式会社ソフトユージング　在籍中\nhttps://softusing.co.jp/\n\nProject\n----\n1. Web勤怠システム　2018年9月 – 2019年1月\n    OS：Linux\n    Test－DB：MariaDB\n    Front－End：Bootstrap, Thymeleaf, JQuery\n    Back-End:Spring-boot, Mybatis and etc..\n\n    コンプライアンスの関係で詳しくご説明できませんが、\n    大雑把に自分の経験を説明致します。\n    基本設計から始まり、詳細設計と製造を担当致しました。\n    フロントエンドのデザインはもちろん、\n    バックエンドの開発も一人で行いました。\n    フロントはBootstrap,ThymeleafとJQueryで構築し、\n    バックエンドはspring bootとMybatisで作りました。\n    OSはLinux，使用するDBはoracle 12c r2でした。\n    インフラの構築も一人で担当しまして、０から作りました。\n\n2. 某大手自動車メーカーのヨーロッパ販売システムの改修と新規画面の追加　2019年1月 – 現在\n    OS：Linux\n    DB：Oracle 11c\n    言語：java\n\n    改修案件でありながら、新規画面の追加も入っております。\n    詳細設計ー製造ー単体テストー結合テストーシステムテストーユーザー受入テストを一貫して、携わっております。\n    多言語の対応、現場スタッフの通訳もしております。\n    この度の案件は来年１月までの契約です。\n\nLink\n----\n\n* [GitHub](https://github.com/lexluthor0304)\n* [個人サイト](https://tokugai.com)\n\n> Fork from [GitHub](https://www.strml.net/)\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=u()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=u()(s.a.mark(function e(){var r,a,u,l,c,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),u=a-r.length,this.currentStyle.length<a?(l=this.currentStyle.length-u,c=r.substring(l,l+1)||" ",this.currentStyle+=c,"\n"===r.substring(l-1,l)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),u=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(u>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.3a4c63aaec89b2d353c7.js.map