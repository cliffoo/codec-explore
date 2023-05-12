import type { Meta, StoryObj } from "@storybook/react";
import { UnknownCallDecoding } from "./unknown-call-decoding";
import { unknownCallDecodingData } from "@/utils/codec-data";

export default {
  component: UnknownCallDecoding
} satisfies Meta<typeof UnknownCallDecoding>;

type Story = StoryObj<typeof UnknownCallDecoding>;

export const write: Story = {
  name: "0x2f048afa",
  args: { data: unknownCallDecodingData["0x2f048afa"] }
};
