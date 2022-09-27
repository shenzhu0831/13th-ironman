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
  devServer: {
    proxy: {
      "/api": {
        target: "http://54.250.146.224:3000/",
        pathRewrite: {
          "^/api": "",
        },
        changeOrigin: true,
        ws: true,
      },
    },
  },
};
