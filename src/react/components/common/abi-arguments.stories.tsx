import type { Meta, StoryObj } from "@storybook/react";
import { AbiArguments } from "./abi-arguments";
import { abiArgumentData } from "@/utils/codec-data";

/**
 * This is only useful to components that need to render `AbiArgument[]`; not
 * so useful on its own.
 */

export default { component: AbiArguments } satisfies Meta<typeof AbiArguments>;

type Story = StoryObj<typeof AbiArguments>;

export const single: Story = {
  name: "single",
  args: { data: [abiArgumentData.withParamName] }
};

export const multiple: Story = {
  name: "multiple",
  args: {
    data: [abiArgumentData.withParamName, abiArgumentData.withoutParamName]
  }
};
