import type { CalldataDecoding } from "@truffle/codec";
import { Inspected } from "./inspected.component";

export interface DecodingProps {
  data: CalldataDecoding;
}

export function Decoding(props: DecodingProps): JSX.Element {
  return (
    <div>
      <Inspected {...props} />
    </div>
  );
}
