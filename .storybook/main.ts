import type { StorybookConfig } from "@storybook/react-vite";

export default {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials"],
  framework: { name: "@storybook/react-vite", options: {} },
  docs: { autodocs: true, defaultName: "docs" },
  core: { disableTelemetry: true }
} satisfies StorybookConfig;
