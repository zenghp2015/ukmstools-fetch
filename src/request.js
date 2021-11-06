import axios from "axios";

export default function (opts) {
  const {
    baseURL = "",
    timeout = 3000,
    interceptors = {},
    errorHandler = function () {},
  } = opts;

  const instance = axios.create({
    baseURL,
    timeout,
  });

  const { request, response } = interceptors;
  if (request && typeof request === "function") {
    instance.interceptors.request.use(request, errorHandler);
  }

  if (response && typeof response === "function") {
    instance.interceptors.response.use(response, errorHandler);
  }

  return instance;
}
