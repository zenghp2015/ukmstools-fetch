import Request from "./request";
let opts = {};
const fetch = async function (route, data) {
  const queryParams = opts.routes[route] && getQueryParams(opts.routes[route]);
  if (!queryParams) {
    return Promise.reject(new Error("Router Params Not Found"));
  }
  switch (queryParams.method) {
    case "POST":
    case "PUT":
    case "PATCH":
      queryParams.data = data;
      break;
    default:
      queryParams.params = data;
  }
  return Request(opts)(queryParams);
};

const getQueryParams = function (url, separator = " ") {
  const result = { url: "", method: "GET" };
  if (url && typeof url === "string") {
    const res = url.split(separator);
    if (res.length > 1) {
      result.url = res[1];
      result.method = res[0].toUpperCase();
    } else {
      result.url = res[0];
    }
  }
  return result;
};

const install = function (Vue, options) {
  opts = Object.assign({}, opts, options);
  Vue.prototype.$fetch = fetch;
};

export { fetch };

export default { install };
