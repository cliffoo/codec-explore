import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Code } from "@/react/components/common/code";

const displayName = "UnknownBytecodeDecoding";

export const { UnknownBytecodeDecoding } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ bytecode }: Codec.UnknownBytecodeDecoding) => (
      <Code type="bytes" title="contract (unknown) bytecode">
        {bytecode}
      </Code>
    )
  )
};
