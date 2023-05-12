import type { Meta, StoryObj } from "@storybook/react";
import { FunctionDecoding } from "./function-decoding";
import { functionDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.FunctionDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: FunctionDecoding
} satisfies Meta<typeof FunctionDecoding>;

type Story = StoryObj<typeof FunctionDecoding>;

export const zeroParamA: Story = {
  name: "ZeroParam.a",
  args: { data: functionDecodingData.zeroParamA }
};

export const simpleStorageWrite: Story = {
  name: "SimpleStorage.write",
  args: { data: functionDecodingData.simpleStorageWrite }
};

export const manyParamsDoSomething: Story = {
  name: "ManyParams.doSomething",
  args: { data: functionDecodingData.manyParamsDoSomething }
};
