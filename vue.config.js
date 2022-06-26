const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    // html-webpack-plugin
    config
      .plugin('html')
      .tap(args => {
        args[0].title = '黑马头条'
        return args
      })
  }
})
