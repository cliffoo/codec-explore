import type { Meta, StoryObj } from "@storybook/react";
import { UintValue } from "./uint-value";
import { uintValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.UintValue.html" target="_blank">codec type</a>
 */

export default { component: UintValue } satisfies Meta<typeof UintValue>;

type Story = StoryObj<typeof UintValue>;

export const uint8: Story = {
  name: "uint8",
  args: { data: uintValueData.uint8 }
};

export const uint256: Story = {
  name: "uint256",
  args: { data: uintValueData.uint256 }
};
