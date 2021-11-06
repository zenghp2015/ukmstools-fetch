import Vue from "vue";
import Vuex from "vuex";
import { fetch } from "../../src/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    fetchMutation(state) {
      console.log(state);
    },
  },
  actions: {
    fetchAction() {
      fetch("GetUserInfo", { username: "admin", password: "123455" }).then(
        (res) => {
          console.log(res);
        }
      );
      // return fetch().then((res) => {
      //   console.log(res);
      //   return res;
      // });
      // Fetch();
      // TODO: 怎么调请求
      // console.log("fetchAction");
      // ctx.commit("fetchMutation");
    },
  },
  getters: {},
  modules: {},
});
