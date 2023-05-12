import type { Meta, StoryObj } from "@storybook/react";
import { StringValue } from "./string-value";
import { stringValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.StringValue.html" target="_blank">codec type</a>
 */

export default { component: StringValue } satisfies Meta<typeof StringValue>;

type Story = StoryObj<typeof StringValue>;

export const malformed: Story = {
  name: "malformed",
  args: { data: stringValueData.malformed }
};

export const valid: Story = {
  name: "valid",
  args: { data: stringValueData.valid }
};
