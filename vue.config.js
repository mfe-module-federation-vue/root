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
        remotes: {
          cart: process.env.REMOTE_CART,
          products: process.env.REMOTE_PRODUCTS,
          profile: process.env.REMOTE_PROFILE,
          root: process.env.REMOTE_ROOT,
          auth: process.env.REMOTE_AUTH,
          ds: process.env.REMOTE_DS,
        },
        shared: {
          ...dependencies,
          vuetify: {
            singleton: true,
          },
          vue: {
            singleton: true,
          },
          "@mfe-module-federation-vue/dealful-package": {
            requiredVersion:
              dependencies["@mfe-module-federation-vue/dealful-package"],
          },
        },
      }),
    ],
  },
  devServer: {
    port: 3000,
    
  },
};
