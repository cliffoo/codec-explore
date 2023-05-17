import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "dark",
    brandImage: require("./logo.svg"),
    brandTitle: "@truffle/codec-components"
  })
});
