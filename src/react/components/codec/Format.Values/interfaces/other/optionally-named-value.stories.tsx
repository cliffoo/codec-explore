import type { Meta, StoryObj } from "@storybook/react";
import { OptionallyNamedValue } from "./optionally-named-value";
import { optionallyNamedValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.OptionallyNamedValue.html" target="_blank">codec type</a>
 */

export default {
  component: OptionallyNamedValue
} satisfies Meta<typeof OptionallyNamedValue>;

type Story = StoryObj<typeof OptionallyNamedValue>;

export const withName: Story = {
  name: "with name",
  args: { data: optionallyNamedValueData.withName }
};

export const withoutName: Story = {
  name: "without name",
  args: { data: optionallyNamedValueData.withoutName }
};
