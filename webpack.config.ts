import * as webpack from "webpack";
import "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import EslintWebpackPlugin from "eslint-webpack-plugin";
import { resolve } from "path";

const extensions = [".ts", ".tsx", ".js", ".jsx", ".scss"];

const config: webpack.Configuration = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions,
    alias: {
      "@": resolve(__dirname, "./src/codec-components")
    },
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
  devServer: {
    client: {
      overlay: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.module\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
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
