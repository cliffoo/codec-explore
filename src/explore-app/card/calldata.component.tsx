import type { CalldataDecoding } from "@truffle/codec";
import { FunctionDecoding } from "@/components/function-decoding";
import { ConstructorDecoding } from "@/components/constructor-decoding";

export interface CalldataProps {
  data: CalldataDecoding;
}

export function Calldata({ data }: CalldataProps): JSX.Element {
  switch (data.kind) {
    case "function":
      return <FunctionDecoding data={data} />;
    case "constructor":
      return <ConstructorDecoding data={data} />;
    default:
      return <mark>Not implemented</mark>;
  }
}
