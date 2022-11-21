import * as webpack from "webpack";
import { merge } from "webpack-merge";
import base from "../../webpack.config.base";

const config: webpack.Configuration = {
  entry: "./src/index.ts"
};

export default merge(base, config);
