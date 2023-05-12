import type { Meta, StoryObj } from "@storybook/react";
import { ConstructorDecoding } from "./constructor-decoding";
import { constructorDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.ConstructorDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: ConstructorDecoding
} satisfies Meta<typeof ConstructorDecoding>;

type Story = StoryObj<typeof ConstructorDecoding>;

export const zeroParam: Story = {
  name: "ZeroParam",
  args: { data: constructorDecodingData.zeroParam }
};

export const simpleStorage: Story = {
  name: "SimpleStorage",
  args: { data: constructorDecodingData.simpleStorage }
};

export const manyParams: Story = {
  name: "ManyParams",
  args: { data: constructorDecodingData.manyParams }
};
