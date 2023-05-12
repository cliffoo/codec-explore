import type { Meta, StoryObj } from "@storybook/react";
import { EventDecoding } from "./event-decoding";
import { eventDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.EventDecoding.html" target="_blank">codec type</a>
 *
 * Consider: Indexed params
 */

export default {
  component: EventDecoding
} satisfies Meta<typeof EventDecoding>;

type Story = StoryObj<typeof EventDecoding>;

export const noParam: Story = {
  name: "no param",
  args: { data: eventDecodingData.noParam }
};

export const oneParam: Story = {
  name: "one param",
  args: { data: eventDecodingData.oneParam }
};

export const multipleParams: Story = {
  name: "multiple params",
  args: { data: eventDecodingData.multipleParams }
};
