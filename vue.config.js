const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const dependencies = require("./package.json").dependencies;

console.log();

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "root",
        filename: "remoteEntry.js",
        exposes: {},
        remotes: {
          cart: process.env.REMOTE_CART,
          products: process.env.REMOTE_PRODUCTS,
          profile: process.env.REMOTE_PROFILE,
        },
        shared: dependencies,
      }),
    ],
  },
  devServer: {
    port: 3000,
    progress: false,
  },
};