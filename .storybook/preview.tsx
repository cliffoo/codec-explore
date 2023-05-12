import React from "react";
import type { Preview } from "@storybook/react";
import { CodecComponentsProvider } from "../src/react/contexts/codec-components";

export default {
  decorators: [Story => <CodecComponentsProvider children={<Story />} />],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
} satisfies Preview;
