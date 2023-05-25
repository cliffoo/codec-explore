import type { Meta, StoryObj } from "@storybook/react";
import { MappingValue } from "./mapping-value";
import { mappingValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.MappingValue.html" target="_blank">codec type</a>
 *
 * Consider: Format.Values.MappingValue["type"]
 */

export default { component: MappingValue } satisfies Meta<typeof MappingValue>;

type Story = StoryObj<typeof MappingValue>;

export const int32ToAddress: Story = {
  name: "mapping(int32 => address)",
  args: { data: mappingValueData.int32ToAddress }
};

export const nested: Story = {
  name: "nested",
  args: { data: mappingValueData.nested }
};
