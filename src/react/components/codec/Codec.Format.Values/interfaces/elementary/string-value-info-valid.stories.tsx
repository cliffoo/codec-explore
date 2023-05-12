import type { Meta, StoryObj } from "@storybook/react";
import { StringValueInfoValid } from "./string-value-info-valid";
import { stringValueInfoValidData } from "@/utils/codec-data";

/**
 * ### <a href="https://trufflesuite.com/docs/truffle/codec/interfaces/_truffle_codec.Format.Values.StringValueInfoValid.html" target="_blank">codec type</a>
 */

export default {
  component: StringValueInfoValid
} satisfies Meta<typeof StringValueInfoValid>;

type Story = StoryObj<typeof StringValueInfoValid>;

export const someString: Story = {
  name: "some string",
  args: { data: stringValueInfoValidData.someString }
};
