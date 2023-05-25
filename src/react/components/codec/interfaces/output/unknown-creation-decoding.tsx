import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

export const { UnknownCreationDecoding } = createCodecComponent(
  "UnknownCreationDecoding",
  ({ bytecode }: Codec.UnknownCreationDecoding) => (
    // TODO
    <Code type="bytes" title="contract (unknown) creation">
      {bytecode}
    </Code>
  )
);
