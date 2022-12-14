import type { CalldataDecoding } from "@truffle/codec";
import { Constructor } from "./constructor";
import { Function } from "./function";
import "./calldata.module.scss";

export interface CalldataProps {
  data: CalldataDecoding;
}

export function Calldata({ data }: CalldataProps): JSX.Element {
  switch (data.kind) {
    case "constructor":
      return <Constructor data={data} />;
    case "function":
      return <Function data={data} />;
    default:
      return <code>{data.kind}</code>;
  }
}
