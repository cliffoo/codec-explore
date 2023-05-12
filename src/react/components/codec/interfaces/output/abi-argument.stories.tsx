import type { Meta, StoryObj } from "@storybook/react";
import { AbiArgument } from "./abi-argument";
import { abiArgumentData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.AbiArgument.html" target="_blank">codec type</a>
 */

export default {
  component: AbiArgument
} satisfies Meta<typeof AbiArgument>;

type Story = StoryObj<typeof AbiArgument>;

export const withParamName: Story = {
  name: "with param name",
  args: { data: abiArgumentData.withParamName }
};

export const withoutParamName: Story = {
  name: "without param name",
  args: { data: abiArgumentData.withoutParamName }
};
