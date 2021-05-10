module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        '@': '/src', // Alias @ to /src folder for ES/TS imports
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/instagram-clone/" : "/",
}