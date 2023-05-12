import type { Meta, StoryObj } from "@storybook/react";
import { NameValuePair } from "./name-value-pair";
import { nameValuePairData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.NameValuePair.html" target="_blank">codec type</a>
 */

export default {
  component: NameValuePair
} satisfies Meta<typeof NameValuePair>;

type Story = StoryObj<typeof NameValuePair>;

export const bytes32: Story = {
  name: "bytes32",
  args: { data: nameValuePairData.bytes32 }
};
