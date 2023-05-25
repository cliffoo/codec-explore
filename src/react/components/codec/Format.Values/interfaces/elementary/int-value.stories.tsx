import type { Meta, StoryObj } from "@storybook/react";
import { IntValue } from "./int-value";
import { intValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.IntValue.html" target="_blank">codec type</a>
 */

export default { component: IntValue } satisfies Meta<typeof IntValue>;

type Story = StoryObj<typeof IntValue>;

export const int256: Story = {
  name: "int256",
  args: { data: intValueData.int256 }
};
