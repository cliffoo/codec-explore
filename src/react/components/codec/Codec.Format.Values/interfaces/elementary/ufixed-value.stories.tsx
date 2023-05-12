import type { Meta, StoryObj } from "@storybook/react";
import { UfixedValue } from "./ufixed-value";
import { ufixedValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.UfixedValue.html" target="_blank">codec type</a>
 */

export default { component: UfixedValue } satisfies Meta<typeof UfixedValue>;

type Story = StoryObj<typeof UfixedValue>;

export const ufixed: Story = {
  name: "ufixed128x18",
  args: { data: ufixedValueData.ufixed128x18 }
};
