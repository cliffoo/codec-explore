import type { Meta, StoryObj } from "@storybook/react";
import { SelfDestructDecoding } from "./self-destruct-decoding";
import { selfDestructDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.SelfDestructDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: SelfDestructDecoding
} satisfies Meta<typeof SelfDestructDecoding>;

type Story = StoryObj<typeof SelfDestructDecoding>;

export const decoding: Story = {
  name: "selfdestruct",
  args: { data: selfDestructDecodingData.decoding }
};
