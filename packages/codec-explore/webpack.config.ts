import * as webpack from "webpack";
import { merge } from "webpack-merge";
import HtmlWebpackPlugin from "html-webpack-plugin";
import base from "../../webpack.config.base";

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })]
};

export default merge(base, config);
