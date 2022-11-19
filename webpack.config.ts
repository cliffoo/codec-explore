import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions,
    fallback: {
      assert: require.resolve("assert/"),
      crypto: require.resolve("crypto-browserify"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
      stream: require.resolve("stream-browserify"),
      url: require.resolve("url/"),
      util: require.resolve("util")
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser"
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"]
    }),
    new EslintWebpackPlugin({ extensions }),
    new HtmlWebpackPlugin({ template: "./src/index.html" })
  ]
};

export default config;
