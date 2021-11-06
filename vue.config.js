module.exports = {
  pages: {
    index: {
      // 示例入口
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "v-fetch examples",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
  // https://cli.vuejs.org/zh/guide/build-targets.html#vue-vs-js-ts-%E5%85%A5%E5%8F%A3%E6%96%87%E4%BB%B6
  // 不具名导出
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
};
