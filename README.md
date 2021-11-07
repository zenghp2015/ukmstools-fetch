# ukmstools-fetch

这是基于 axios 封装的请求库，目的是为了简化项目中 API 文件夹的文件，提高开发效率。

## 项目问题

- 每个项目都需要建立 API 文件夹，存放需要请求的文件。
- 每个 API 文件都需要重复编写
- 项目中各文件重复 import 导入调用

## 安装

## 使用

1、Vue 插件导入

```js
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VFetch from "ukmstools-fetch";
import FetchConfig from "./config/fetch.config"; // fetch 配置文件

Vue.config.productionTip = false;
Vue.use(VFetch, FetchConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
```

2、template 直接使用

```vue
<template>
  <div id="app">
    <router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {
    // 直接调用 
    // fn(name, params) 接口名，参数
    // 对应调用 routes 里的 userInfo 
    this.$fetch("userInfo", { name: "admin" }).then((response) => {
      console.log("response", response);
    });

    // vuex dispatch
    this.$store.dispatch('fetchAction');
  },
};
</script>
```

3、vuex dispatch 异步提交

```js
import Vue from "vue";
import Vuex from "vuex";
import { fetch } from "fetch";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload;
    }
  },
  actions: {
    fetchAction({commit}, payload) {
      // fetch("GetUserInfo", {
      //   username: "admin",
      //   password: "123455",
      // });
      return new Promise((resolve, reject) => {
        fetch('getUserInfo', payload).then(res => {
          commit('setUserInfo', res)
          resolve(res)
        }).catch(e => {
          reject(e)
        })
      })
    },
  },
  getters: {},
  modules: {},
});
```

## 配置文件

```js
// 基本和axios配置一致
// 目前仅支持这么多，后续继续优化
{
  baseURL: "/api",
  timeout: 3000,
  interceptors: {
    // request: [function () {}, function () {}],
    request: function (config) {
      console.log(config);
      return config;
    },
    response: function () {},
  },
  // 错误统一处理
  errorHandler: (e) => {
    console.log(e.response);
  },
  // api 地址
  // GET PUT DELETE POST
  routes: {
    logout: '/api/user/logout',        // 默认GET请求
    userLogin: 'POST /api/user/login', // POST请求
    userInfo: 'GET /api/user/info',    // GET请求
    editUserInfo: 'PUT /api/user/info', // PUT请求
  },
}
```
