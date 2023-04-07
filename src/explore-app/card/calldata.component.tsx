import type { CalldataDecoding } from "@truffle/codec";
import { AbiArguments } from "@/common/abi-arguments";

export interface CalldataProps {
  data: CalldataDecoding;
}

export function Calldata({ data }: CalldataProps): JSX.Element {
  switch (data.kind) {
    case "function":
      return (
        <>
          {data.class.typeName}.{data.abi.name}
          <AbiArguments data={data.arguments} />
        </>
      );
    case "constructor":
      return (
        <>
          new {data.class.typeName}
          <AbiArguments data={data.arguments} />
        </>
      );
    default:
      return <mark>Not implemented</mark>;
  }
}
