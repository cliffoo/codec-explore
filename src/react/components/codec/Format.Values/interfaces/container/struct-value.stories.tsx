import type { Meta, StoryObj } from "@storybook/react";
import { StructValue } from "./struct-value";
import { structValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.StructValue.html" target="_blank">codec type</a>
 */

export default { component: StructValue } satisfies Meta<typeof StructValue>;

type Story = StoryObj<typeof StructValue>;

export const localStruct: Story = {
  name: "local",
  args: { data: structValueData.local }
};

export const globalStruct: Story = {
  name: "global",
  args: { data: structValueData.global }
};
