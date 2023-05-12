import type { Meta, StoryObj } from "@storybook/react";
import { AnonymousDecoding } from "./anonymous-decoding";
import { anonymousDecodingData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.AnonymousDecoding.html" target="_blank">codec type</a>
 *
 * Just like `EventDecoding`, consider indexed params.
 */

export default {
  component: AnonymousDecoding
} satisfies Meta<typeof AnonymousDecoding>;

type Story = StoryObj<typeof AnonymousDecoding>;

export const oneParam: Story = {
  name: "one param",
  args: { data: anonymousDecodingData.oneParam }
};
