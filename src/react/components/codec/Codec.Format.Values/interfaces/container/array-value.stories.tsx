import type { Meta, StoryObj } from "@storybook/react";
import { ArrayValue } from "./array-value";
import { arrayValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.ArrayValue.html" target="_blank">codec type</a>
 */

export default { component: ArrayValue } satisfies Meta<typeof ArrayValue>;

type Story = StoryObj<typeof ArrayValue>;

export const address: Story = {
  name: "address[]",
  args: { data: arrayValueData.address }
};

export const bool: Story = {
  name: "bool[]",
  args: { data: arrayValueData.bool }
};

export const bytesDynamic: Story = {
  name: "bytes[] (dynamic)",
  args: { data: arrayValueData.bytesDynamic }
};

export const int: Story = {
  name: "int[]",
  args: { data: arrayValueData.int }
};

export const string: Story = {
  name: "string[]",
  args: { data: arrayValueData.string }
};

export const uint: Story = {
  name: "uint[]",
  args: { data: arrayValueData.uint }
};

export const string2D: Story = {
  name: "string[][]",
  args: { data: arrayValueData.string2D }
};
