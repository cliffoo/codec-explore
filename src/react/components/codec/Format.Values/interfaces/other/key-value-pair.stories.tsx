import type { Meta, StoryObj } from "@storybook/react";
import { KeyValuePair } from "./key-value-pair";
import { keyValuePairData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.KeyValuePair.html" target="_blank">codec type</a>
 */

export default { component: KeyValuePair } satisfies Meta<typeof KeyValuePair>;

type Story = StoryObj<typeof KeyValuePair>;

export const addressToUint: Story = {
  name: "address => uint",
  args: { data: keyValuePairData.addressToUint }
};

export const addressToBoolArray: Story = {
  name: "address => bool[]",
  args: { data: keyValuePairData.addressToBoolArray }
};
