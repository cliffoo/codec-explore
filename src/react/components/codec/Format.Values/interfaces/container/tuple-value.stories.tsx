import type { Meta, StoryObj } from "@storybook/react";
import { TupleValue } from "./tuple-value";
import { tupleValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.TupleValue.html" target="_blank">codec type</a>
 */

export default { component: TupleValue } satisfies Meta<typeof TupleValue>;

type Story = StoryObj<typeof TupleValue>;

export const empty: Story = {
  name: "empty",
  args: { data: tupleValueData.empty }
};

export const notEmpty: Story = {
  name: "not empty",
  args: { data: tupleValueData.notEmpty }
};
