import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";
const logoPath = require("./logo.svg") as string;

addons.setConfig({
  theme: create({
    base: "dark",
    brandImage: logoPath,
    brandTitle: "@truffle/codec-components"
  })
});
