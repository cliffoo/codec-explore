import type { Meta, StoryObj } from "@storybook/react";
import { BoolValue } from "./bool-value";
import { boolValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.BoolValue.html" target="_blank">codec type</a>
 */

export default { component: BoolValue } satisfies Meta<typeof BoolValue>;

type Story = StoryObj<typeof BoolValue>;

export const t: Story = {
  name: "true",
  args: { data: boolValueData.true }
};

export const f: Story = {
  name: "false",
  args: { data: boolValueData.false }
};
