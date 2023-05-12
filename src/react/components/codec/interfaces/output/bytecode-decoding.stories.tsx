import type { Meta, StoryObj } from "@storybook/react";
import { BytecodeDecoding } from "./bytecode-decoding";
import { bytecodeDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.BytecodeDecoding.html" target="_blank">codec type</a>
 *
 * Consider: Immutable state variables.
 */

export default {
  component: BytecodeDecoding
} satisfies Meta<typeof BytecodeDecoding>;

type Story = StoryObj<typeof BytecodeDecoding>;

export const simpleStorage: Story = {
  name: "SimpleStorage runtime bytecode",
  args: { data: bytecodeDecodingData.simpleStorage }
};
