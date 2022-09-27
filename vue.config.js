module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/sass/breakpoint.scss";
        `,
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule
      .use("babel-loader")
      .loader("babel-loader")
      .end()
      .use("vue-svg-loader")
      .loader("vue-svg-loader");
  },
  // 處理後端主機與本地跨域產生 CORS 問題
  // devServer: {
  //   proxy: {
  //     "/api": {
  //       target: "http://54.250.146.224:3000/",
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //       changeOrigin: true,
  //       ws: true,
  //     },
  //   },
  // },
};
