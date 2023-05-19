import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./container";

export default { component: Container } satisfies Meta<typeof Container>;

type Story = StoryObj<typeof Container>;

const prefix = <mark style={{ backgroundColor: "cyan" }}>prefix</mark>;
const suffix = <mark style={{ backgroundColor: "magenta" }}>suffix</mark>;

export const noChild: Story = {
  name: "no child",
  args: { prefix, suffix, empty: true }
};

export const withChild: Story = {
  name: "with child",
  args: { children: <mark>child</mark>, prefix, suffix, empty: false }
};

export const withChildren: Story = {
  name: "with children",
  args: {
    children: (
      <>
        <mark style={{ backgroundColor: "hsl(60,0%,60%)" }}>
          Lorem ipsum dolor sit amet.
        </mark>
        <mark style={{ backgroundColor: "hsl(60,50%,60%)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit
          ante libero, at pellentesque dui cursus ac. Donec est enim.
        </mark>
        <mark style={{ backgroundColor: "hsl(60,100%,60%)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed.
        </mark>
      </>
    ),
    prefix,
    suffix,
    empty: false
  }
};

export const nested: Story = {
  name: "nested",
  args: {
    children: (
      <>
        <mark style={{ backgroundColor: "hsl(60,0%,60%)" }}>hello</mark>
        <Container prefix="[" suffix="]" empty={false}>
          <mark style={{ backgroundColor: "hsl(60,16%,60%)" }}>abcd</mark>
          <mark style={{ backgroundColor: "hsl(60,32%,60%)" }}>
            the quick brown fox jumped over the lazy dog
          </mark>
          <Container prefix="{" suffix="}" empty={false}>
            <mark style={{ backgroundColor: "hsl(60,48%,60%)" }}>0x1234</mark>
            <mark style={{ backgroundColor: "hsl(60,64%,60%)" }}>
              0xbc1f71253612b66b5938e6cc90b161676ff66a905c76d8216a8c187fd42ded88941924d65b325914
            </mark>
            <mark style={{ backgroundColor: "hsl(60,80%,60%)" }}>
              0xf561eaff77c193335e68
            </mark>
          </Container>
          <mark style={{ backgroundColor: "hsl(60,96%,60%)" }}>foobar</mark>
        </Container>
      </>
    ),
    prefix,
    suffix,
    empty: false
  }
};
