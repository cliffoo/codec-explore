import type { CalldataDecoding } from "@truffle/codec";
import { Calldata } from "../codec-calldata";
import "./codec.module.scss";

export interface CodecProps {
  data: CalldataDecoding;
}

export function Codec({ data }: CodecProps): JSX.Element {
  return (
    <div>
      <h3>codec-component</h3>
      <Calldata data={data} />
    </div>
  );
}
