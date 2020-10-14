module.exports = {
    // publicPath: './',
    productionSourceMap: false,
    devServer: {
      port: "8080",
      proxy: {
        // 配置跨域
        "/api": {
          //要访问的跨域的api的域名
          target: 'http://47.110.74.199',
          ws: true,
          changOrigin: true,
          pathRewrite: {
            "^/api/": "",
          },
        },
      },
    },
  };