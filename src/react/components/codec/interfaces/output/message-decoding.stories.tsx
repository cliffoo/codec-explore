import type { Meta, StoryObj } from "@storybook/react";
import { MessageDecoding } from "./message-decoding";
import { messageDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.MessageDecoding.html" target="_blank">codec type</a>
 */

export default {
  component: MessageDecoding
} satisfies Meta<typeof MessageDecoding>;

type Story = StoryObj<typeof MessageDecoding>;

export const fallback: Story = {
  name: "fallback",
  args: { data: messageDecodingData.fallback }
};

export const receive: Story = {
  name: "receive",
  args: { data: messageDecodingData.receive }
};

export const noAbi: Story = {
  name: "no abi",
  args: { data: messageDecodingData.noAbi }
};
