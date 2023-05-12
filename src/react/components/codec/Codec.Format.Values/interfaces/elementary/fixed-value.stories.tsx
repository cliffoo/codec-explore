import type { Meta, StoryObj } from "@storybook/react";
import { FixedValue } from "./fixed-value";
import { fixedValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.FixedValue.html" target="_blank">codec type</a>
 */

export default { component: FixedValue } satisfies Meta<typeof FixedValue>;

type Story = StoryObj<typeof FixedValue>;

export const fixed: Story = {
  name: "fixed128x18",
  args: { data: fixedValueData.fixed128x18 }
};
