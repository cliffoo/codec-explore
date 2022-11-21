import type { CalldataDecoding } from "@truffle/codec";
import { Constructor } from "../codec-calldata-constructor";
import { Function } from "../codec-calldata-function";

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
