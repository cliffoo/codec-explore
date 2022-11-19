import type { CalldataDecoding } from "@truffle/codec";

export interface CodecCalldataProps {
  data: CalldataDecoding;
}

export function CodecCalldata({ data }: CodecCalldataProps): JSX.Element {
  return <code>{data.kind}</code>;
}
