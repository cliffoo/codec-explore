import type { Meta, StoryObj } from "@storybook/react";
import { RevertMessageDecoding } from "./revert-message-decoding";
import { revertMessageDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.RevertMessageDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: RevertMessageDecoding
} satisfies Meta<typeof RevertMessageDecoding>;

type Story = StoryObj<typeof RevertMessageDecoding>;

export const unauthorized: Story = {
  name: "revert Unauthorized",
  args: { data: revertMessageDecodingData.unauthorized }
};
