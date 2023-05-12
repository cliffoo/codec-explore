import type { Meta, StoryObj } from "@storybook/react";
import { UnknownBytecodeDecoding } from "./unknown-bytecode-decoding";
import { unknownBytecodeDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.UnknownBytecodeDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: UnknownBytecodeDecoding
} satisfies Meta<typeof UnknownBytecodeDecoding>;

type Story = StoryObj<typeof UnknownBytecodeDecoding>;

export const someContract: Story = {
  name: "some contract",
  args: { data: unknownBytecodeDecodingData.someContract }
};
