import type { Meta, StoryObj } from "@storybook/react";
import { Options } from "./options";
import { optionsData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Options.html" target="_blank">codec type</a>
 */

export default { component: Options } satisfies Meta<typeof Options>;

type Story = StoryObj<typeof Options>;

export const empty: Story = {
  name: "empty",
  args: { data: optionsData.empty }
};

export const notEmpty: Story = {
  name: "not empty",
  args: { data: optionsData.notEmpty }
};
