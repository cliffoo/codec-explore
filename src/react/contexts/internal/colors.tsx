import { createContext, useContext } from "react";
import type { CodeProps } from "@/react/components/common/code";

export type ColorsContextValue = Record<
  Exclude<NonNullable<CodeProps["type"]>, "bracket">,
  string
> & {
  bracket: string[];
};
const red = "#ff304a";
const orange = "#f26311";
const blue = "#1570cf";
const navy = "#0f2e72";
const purple = "#7c1aaa";
const dark = "#3a3a3a";
export const ColorsContext = createContext<ColorsContextValue>({
  address: blue,
  boolean: blue,
  bytes: blue,
  number: blue,
  string: navy,
  "new-keyword": red,
  contract: blue,
  function: purple,
  event: purple,
  "event-keyword": red,
  error: blue,
  "revert-keyword": purple,
  enum: purple,
  bracket: [orange, purple, blue],
  name: dark,
  colon: red,
  comma: dark,
  period: dark,
  default: dark
});
export const useColors = () => useContext(ColorsContext);
