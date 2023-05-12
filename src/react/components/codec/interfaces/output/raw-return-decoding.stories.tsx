import type { Meta, StoryObj } from "@storybook/react";
import { RawReturnDecoding } from "./raw-return-decoding";
import { rawReturnDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.RawReturnDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: RawReturnDecoding
} satisfies Meta<typeof RawReturnDecoding>;

type Story = StoryObj<typeof RawReturnDecoding>;

export const someData: Story = {
  name: "some data",
  args: { data: rawReturnDecodingData.someData }
};
