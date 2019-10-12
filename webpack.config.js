const webpack = require("webpack");
const path = require("path");
const libraryName = "Datetime";
const filename = "Datetime";

const config = {
  entry: __dirname + "/lib/index.ts",
  devtool: "source-map",
  output: {
    path: __dirname + "/dist",
    publicPath: "/dist",
    library: libraryName,
    libraryTarget: "umd",
    // libraryExport: "default",
    filename: filename + ".umd.js",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "./tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ["*", ".ts"],
  },
};
module.exports = config;
