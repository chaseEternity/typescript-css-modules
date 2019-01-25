module.exports = {
  // 选项...
  devServer: {
    port: 11892,
    hot: true,
    open: true
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1,
  css: {
    // modules: true,
    // 开启 CSS Modules
    modules: true,
    sourceMap: false,
    loaderOptions: {
      css: {
        localIdentName: '[name]_[local]_[hash:base64:10]',
        camelCase: 'only',
      },
      sass: {}
    },
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: [/\.scss$/],
          use: [
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                modules: true,
                namedExport: true,
                camelCase: true,
                minimize: true,
                localIdentName: "[local]_[hash:base64:5]"
              }
            },
            // { loader: "sass-loader" },
          ],
        },
      ]
    },
  },

  // chainWebpack: config => {
  //   // typings-for-css-modules-loader
  //   config.module
  //     .rule('style')
  //     .test(/\.scss$/)
  //     .use('typings-for-css-modules-loader')
  //     .loader('typings-for-css-modules-loader')
  //     .options({
  //       modules: true,
  //       namedExport: true,
  //       camelCase: true,
  //       minimize: true,
  //       localIdentName: "[local]_[hash:base64:5]"
  //     })
  //     .end()
  // }
}
