import type { Meta, StoryObj } from "@storybook/react";
import { BytesDynamicValue } from "./bytes-dynamic-value";
import { bytesDynamicValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.BytesDynamicValue.html" target="_blank">codec type</a>
 *
 * Consider:
 *
 * - Location. Currently displayed in `title` on hover.
 * - Kind (dynamic).
 */

export default {
  component: BytesDynamicValue
} satisfies Meta<typeof BytesDynamicValue>;

type Story = StoryObj<typeof BytesDynamicValue>;

export const withLocation: Story = {
  name: "with location",
  args: { data: bytesDynamicValueData.inCalldata }
};

export const withoutLocation: Story = {
  name: "without location",
  args: { data: bytesDynamicValueData.withoutLocation }
};
