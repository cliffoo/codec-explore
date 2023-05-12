import type { Meta, StoryObj } from "@storybook/react";
import { UnknownCreationDecoding } from "./unknown-creation-decoding";
import { unknownCreationDecodingData } from "@/utils/codec-data";

export default {
  component: UnknownCreationDecoding
} satisfies Meta<typeof UnknownCreationDecoding>;

type Story = StoryObj<typeof UnknownCreationDecoding>;

export const simpleStorage: Story = {
  name: "unknown",
  args: { data: unknownCreationDecodingData.unknown }
};
