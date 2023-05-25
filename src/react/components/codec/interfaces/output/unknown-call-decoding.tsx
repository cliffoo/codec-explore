import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

export const { UnknownCallDecoding } = createCodecComponent(
  "UnknownCallDecoding",
  ({ data }: Codec.UnknownCallDecoding) => (
    // TODO
    <Code type="bytes" title="data sent to contract (unknown)">
      {data}
    </Code>
  )
);
