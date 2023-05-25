import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

export const { UnknownBytecodeDecoding } = createCodecComponent(
  "UnknownBytecodeDecoding",
  ({ bytecode }: Codec.UnknownBytecodeDecoding) => (
    <Code type="bytes" title="contract (unknown) bytecode">
      {bytecode}
    </Code>
  )
);
