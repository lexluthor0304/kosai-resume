<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor
    },
    data() {
      return {
        interval: 40,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Inspired by http://strml.net/
* 履歴書をご覧いただきありがとうございます。
* 蔡　恒（サイ・コウ）と申します。
* 東京在住、来日7年目の中国人です。
* 今はエンジニア一年目です。
* さて、今から履歴書を作っていきましょう。
*/

/* まず基本のエフェクトをつけて */
* {
  transition: all .3s;
}
/* 白のバックグラウンドはつまらないから，ちょっと色を付けてみる */
html {
  color: rgb(222,222,222); background: rgb(0,43,54);
}
/* 文字は枠に近すぎるから、ちょっと調整する */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* コードをハイライトで表示し */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 少しおしゃれにして、3Dのエフェクトも追加しよう*/
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* さて、エディターがないとだめですね */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}
/* いざ準備完了、今から履歴を描きますね */


`,
          `
/* ああ、この履歴書なんかものたりないですね
 * そうだ！これは Markdown で記述された履歴書です。HRの方にもっと見やすくしよう
 * よっこいしょ HTML で表示する
 */
`
          ,
          `
/* さてさてもう少し HTML を整える */
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`],
        currentMarkdown: '',
        fullMarkdown: `蔡　恒（サイ・コウ）
----

東京に住んでいる中国人です。
法政大学文学部18年卒です。
今年28歳です。
今はエンジニアとして働いています。
まだ一年生かつ文系出身ですので、
わからないことが多いですが、
プログラミング知識について一生懸命勉強しています

Educational Background
----
HOSEI UNIVERSITY 2014-2018

Skills
----

* Java
* Spring boot
* Mybatis
* HTML
* CSS
* JavaScript
* MySQL, Oracle
* and etc..

Studying Program
----

* Python
* Vue.js
* Salesforce

Certification
----

* Salesforce platform developer I
* Business Japanese Proficiency Test J1 Level
* Japanese Language Proficiency Test N1

Career
----
株式会社ソフトユージング　在籍中
https://softusing.co.jp/

Project
----
1. Web勤怠システム　2018年9月 – 2019年1月<br>
    OS：Linux<br>
    Test－DB：MariaDB<br>
    Front－End：Bootstrap, Thymeleaf, JQuery<br>
    Back-End:Spring-boot, Mybatis and etc..<br>

    コンプライアンスの関係で詳しくご説明できませんが、<br>
    大雑把に自分の経験を説明致します。<br>
    基本設計から始まり、詳細設計と製造を担当致しました。<br>
    フロントエンドのデザインはもちろん、<br>
    バックエンドの開発も一人で行いました。<br>
    フロントはBootstrap,ThymeleafとJQueryで構築し、<br>
    バックエンドはspring bootとMybatisで作りました。<br>
    OSはLinux，使用するDBはoracle 12c r2でした。<br>
    インフラの構築も一人で担当しまして、０から作りました。<br>

2. 某大手自動車メーカーのヨーロッパ販売システムの改修と新規画面の追加　2019年1月 – 現在<br>
    OS：Linux<br>
    DB：Oracle 11c<br>
    言語：Java<br>

    改修案件でありながら、新規画面の追加も入っております。<br>
    詳細設計ー製造ー単体テストー結合テストーシステムテストーユーザー受入テストを一貫して、携わっております。<br>
    多言語の対応、現場スタッフの通訳もしております。<br>
    この度の案件は来年１月までの契約です。<br>

Link
----

* [GitHub](https://github.com/lexluthor0304)
* [個人サイト](https://tokugai.com)

> Fork on [GitHub](https://www.strml.net/)

`
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0)
        await this.progressivelyShowResume()
        await this.progressivelyShowStyle(1)
        await this.showHtml()
        await this.progressivelyShowStyle(2)
      },
      showHtml: function () {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) { return }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }
  *{
    box-sizing: border-box;
  }
</style>
