/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path")

const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        use: [
          "babel-loader",
          {
            loader: "astroturf/loader",
            options: { extension: ".module.css" },
          },
          "ts-loader",
        ],
        test: /\.tsx?$/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      src: path.resolve(__dirname, "/src"),
    },
  },
  output: {
    filename: "static/js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
}
