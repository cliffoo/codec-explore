import type { Meta, StoryObj } from "@storybook/react";
import { AddressValue } from "./address-value";
import { addressValueData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.AddressValue.html" target="_blank">codec type</a>
 *
 * Consider:
 *
 * - Payable. Currently displayed in `title` on hover.
 * - ENS.
 */

export default { component: AddressValue } satisfies Meta<typeof AddressValue>;

type Story = StoryObj<typeof AddressValue>;

export const general: Story = {
  name: "general",
  args: { data: addressValueData.general }
};

export const payable: Story = {
  name: "payable",
  args: { data: addressValueData.payable }
};

export const nonPayable: Story = {
  name: "non-payable",
  args: { data: addressValueData.nonPayable }
};
