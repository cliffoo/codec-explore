import type { Meta, StoryObj } from "@storybook/react";
import { ReturnDecoding } from "./return-decoding";
import { returnDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.ReturnDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: ReturnDecoding
} satisfies Meta<typeof ReturnDecoding>;

type Story = StoryObj<typeof ReturnDecoding>;

export const oneValue: Story = {
  name: "one value",
  args: { data: returnDecodingData.oneValue }
};

export const multipleValues: Story = {
  name: "multiple values",
  args: { data: returnDecodingData.multipleValues }
};
