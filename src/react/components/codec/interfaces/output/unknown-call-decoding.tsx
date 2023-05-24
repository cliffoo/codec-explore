import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

const displayName = "UnknownCallDecoding";

export const { UnknownCallDecoding } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ data }: Codec.UnknownCallDecoding) => (
      // TODO
      <Code type="bytes" title="data sent to contract (unknown)">
        {data}
      </Code>
    )
  )
};
