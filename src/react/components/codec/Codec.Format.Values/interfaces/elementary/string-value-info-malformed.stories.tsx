import type { Meta, StoryObj } from "@storybook/react";
import { StringValueInfoMalformed } from "./string-value-info-malformed";
import { stringValueInfoMalformedData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.StringValueInfoMalformed.html" target="_blank">codec type</a>
 *
 * Consider:
 *
 * - Currently two things highlight the fact that the string is malformed:
 *   `title` on hover and lack of parentheses. It should also use a different
 *   color than valid string, perhaps using the same color as bytes.
 */

export default {
  component: StringValueInfoMalformed
} satisfies Meta<typeof StringValueInfoMalformed>;

type Story = StoryObj<typeof StringValueInfoMalformed>;

export const fffff: Story = {
  name: "0xfffff",
  args: { data: stringValueInfoMalformedData.fffff }
};
