// async function fetch(route, data) {
//   const queryParams = opts.routes[route] && getQueryParams(opts.routes[route]);

//   if (!queryParams) {
//     return Promise.reject(new Error("Router Params Not Found"));
//   }

//   switch (queryParams.method) {
//     case "GET":
//       queryParams.params = data;
//       break;
//     case "POST":
//       queryParams.data = data;
//       break;
//   }

//   return Request(opts)(queryParams);
// }
// export default fetch;
