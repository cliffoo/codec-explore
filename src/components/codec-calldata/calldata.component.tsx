import type { CalldataDecoding } from "@truffle/codec";

export interface CalldataProps {
  data: CalldataDecoding;
}

export function Calldata({ data }: CalldataProps): JSX.Element {
  return <code>{data.kind}</code>;
}
