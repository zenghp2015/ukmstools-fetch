# v-fetch

封装 Axios, 避免在项目中重复写 API 方法。

基于 Axios 封装的接口请求

## 安装

```js
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

import VFetch from "../src/index";
import FetchConfig from "./config/fetch.config";

Vue.config.productionTip = false;
Vue.use(VFetch, FetchConfig);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
```

## 使用

# 项目问题

1、比如在项目中总有一个 API 文件夹，里面放的都是后台的接口，重复定义写方法，然后各种地方调用，各种 import，

```js
import api from '@/api'
import { axios } from '@/utils/request'

/**
 * 登录
 * @param {*} params 用户信息
 * @returns
 */
export function login (params) {
  return axios({
    url: '/user/login',
    method: 'post',
    data: params
  })
}

/**
 * 重新登录
 * @returns Promise
 */
export function relogin () {
  return axios({
    url: '/user/relogin',
    method: 'put'
  })
}

/**
 * 注销登录
 * @returns Promise
 */
export function logout () {
  return axios({
    url: '/user/logout',
    method: 'post'
  })
}
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
