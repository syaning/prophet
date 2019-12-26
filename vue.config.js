module.exports = {
  publicPath: '/prophet/',

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080'
      }
    }
  }
}
