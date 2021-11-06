export default {
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
  errorHandler: (e) => {
    console.log(e.response);
  },
  routes: {
    GetUserInfo: "GET /apis/admin/user/info",
    Login: "POST /apis/admin/user/show",
  },
};
