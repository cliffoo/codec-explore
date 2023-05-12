import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./code";

export default { component: Code } satisfies Meta<typeof Code>;

type Story = StoryObj<typeof Code>;

export const string: Story = {
  name: "string",
  args: { children: "foobar" }
};
