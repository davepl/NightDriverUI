// production config
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const { resolve } = require("path");

const commonConfig = require("./common");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  optimization: {
    minimize: true,
    moduleIds: "size",
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: true,
        },
      }),
    ],
  },
  plugins: [],
});
