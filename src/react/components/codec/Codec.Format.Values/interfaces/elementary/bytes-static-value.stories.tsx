import type { Meta, StoryObj } from "@storybook/react";
import { BytesStaticValue } from "./bytes-static-value";
import { bytesStaticValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.BytesStaticValue.html" target="_blank">codec type</a>
 *
 * Consider:
 *
 * - Length.
 * - Kind (static).
 */

export default {
  component: BytesStaticValue
} satisfies Meta<typeof BytesStaticValue>;

type Story = StoryObj<typeof BytesStaticValue>;

export const bytes8: Story = {
  name: "bytes8",
  args: { data: bytesStaticValueData.bytes8 }
};
