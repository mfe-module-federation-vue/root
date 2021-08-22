const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const dependencies = require("./package.json").dependencies;

module.exports = {
  publicPath: process.env.PUBLIC_PATH,
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "root",
        filename: "remoteEntry.js",
        exposes: {
          "./userModuleFromRoot": "./src/userModuleFromRoot",
          "./userModuleFromRootByHelper": "./src/helper-modules/user.module",
          "./store": "./src/store",
        },
        remotes: {
          cart: process.env.REMOTE_CART,
          products: process.env.REMOTE_PRODUCTS,
          profile: process.env.REMOTE_PROFILE,
          root: process.env.REMOTE_ROOT,
          auth: process.env.REMOTE_AUTH,
          store: process.env.REMOTE_STORE,
          ds: process.env.REMOTE_DS,

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
