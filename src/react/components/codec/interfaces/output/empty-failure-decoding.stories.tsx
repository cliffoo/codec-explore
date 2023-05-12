import type { Meta, StoryObj } from "@storybook/react";
import { EmptyFailureDecoding } from "./empty-failure-decoding";
import { emptyFailureDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.EmptyFailureDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: EmptyFailureDecoding
} satisfies Meta<typeof EmptyFailureDecoding>;

type Story = StoryObj<typeof EmptyFailureDecoding>;

export const decoding: Story = {
  name: "revert",
  args: { data: emptyFailureDecodingData.decoding }
};
