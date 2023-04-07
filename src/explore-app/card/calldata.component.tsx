import type { CalldataDecoding } from "@truffle/codec";
import { FunctionDecoding } from "@/components/function-decoding";
import { AbiArguments } from "@/common/abi-arguments";

export interface CalldataProps {
  data: CalldataDecoding;
}

export function Calldata({ data }: CalldataProps): JSX.Element {
  switch (data.kind) {
    case "function":
      return <FunctionDecoding data={data} />;
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
