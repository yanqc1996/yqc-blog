(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{364:function(s,t,a){"use strict";a.r(t);var e=a(43),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vue-jest单元测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-jest单元测试"}},[s._v("#")]),s._v(" vue-jest单元测试")]),s._v(" "),a("p",[s._v("搭建参照："),a("a",{attrs:{href:"https://juejin.im/post/5db7c416f265da4d3a52dd9b",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://juejin.im/post/5db7c416f265da4d3a52dd9b"),a("OutboundLink")],1),a("br")]),s._v(" "),a("p",[a("a",{attrs:{name:"TOVKb"}})]),s._v(" "),a("h3",{attrs:{id:"_1-项目中引入方式："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-项目中引入方式："}},[s._v("#")]),s._v(" 1.项目中引入方式：")]),s._v(" "),a("p",[a("a",{attrs:{name:"AaJRv"}})]),s._v(" "),a("h4",{attrs:{id:"_1-初始化时引入：在新建项目时选择unit-testing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化时引入：在新建项目时选择unit-testing"}},[s._v("#")]),s._v(" 1.初始化时引入：在新建项目时选择Unit Testing")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" Check the features needed "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" your project"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n ◉ Babel\n ◯ TypeScript\n ◯ Progressive Web "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("App")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("PWA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Support\n ◯ Router\n ◯ Vuex\n ◯ "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CSS")]),s._v(" Pre"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("processors\n ◯ Linter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Formatter\n ◉ Unit Testing\n ◯ "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("E2E")]),s._v(" Testing\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("选择Jest并完成项目安装")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v(" Pick a unit testing solution"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  Mocha "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" Chai\n❯ Jest\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("a",{attrs:{name:"0oMX3"}})]),s._v(" "),a("h4",{attrs:{id:"_2-如果要在已经创建好的项目中引入jest，直接在项目使用vue-add-vue-unit-jest插件，会自动将需要的依赖安装配置好。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果要在已经创建好的项目中引入jest，直接在项目使用vue-add-vue-unit-jest插件，会自动将需要的依赖安装配置好。"}},[s._v("#")]),s._v(" 2.如果要在已经创建好的项目中引入Jest，直接在项目使用vue add @vue/unit-jest插件，会自动将需要的依赖安装配置好。")]),s._v(" "),a("p",[a("a",{attrs:{name:"T5S9D"}})]),s._v(" "),a("h4",{attrs:{id:"_3-修改package-json文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改package-json文件"}},[s._v("#")]),s._v(" 3.修改package.json文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    "scripts": {\n        "serve": "vue-cli-service serve",\n        "build": "vue-cli-service build",\n        "test:unit": "vue-cli-service test:unit --watch",\n        "test:cov": "vue-cli-service test:unit --coverage"\n    },\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("a",{attrs:{name:"EeWU7"}})]),s._v(" "),a("h4",{attrs:{id:"_4-控制台执行测试命令：npm-run-test-unit，终端测试结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-控制台执行测试命令：npm-run-test-unit，终端测试结果"}},[s._v("#")]),s._v(" 4.控制台执行测试命令：npm run test:unit，终端测试结果")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2020/png/326402/1589360556905-4cc8d98b-958a-406d-9a4e-630038f7cd05.png#align=left&display=inline&height=204&margin=%5Bobject%20Object%5D&name=image.png&originHeight=408&originWidth=934&size=192447&status=done&style=none&width=467",alt:"image.png"}})]),s._v(" "),a("p",[a("a",{attrs:{name:"MwxuL"}})]),s._v(" "),a("h3",{attrs:{id:"_2-项目中自定义使用：参照链接文档即可"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目中自定义使用：参照链接文档即可"}},[s._v("#")]),s._v(" 2.项目中自定义使用：参照链接文档即可")])])}),[],!1,null,null,null);t.default=n.exports}}]);