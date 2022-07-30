// development config
const { merge } = require("webpack-merge");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    "react-hot-loader/patch", // activate HMR for React
    "webpack-dev-server/client?http://localhost:8080", // bundle the 
client for webpack-dev-server and connect to the provided endpoint
    "./index.tsx", // the entry point of our app
  ],
  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [],
});
