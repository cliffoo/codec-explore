import type { Meta, StoryObj } from "@storybook/react";
import { StateVariable } from "./state-variable";
import { stateVariableData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.StateVariable.html" target="_blank">codec type</a>
 */

export default {
  component: StateVariable
} satisfies Meta<typeof StateVariable>;

type Story = StoryObj<typeof StateVariable>;

export const string: Story = {
  name: "string",
  args: { data: stateVariableData.string }
};

export const uint8: Story = {
  name: "uint8",
  args: { data: stateVariableData.uint8 }
};
