import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "UnknownBytecodeDecoding";

export const { UnknownBytecodeDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ bytecode }: Codec.UnknownBytecodeDecoding) => (
      <Code type="bytes" title="contract (unknown) bytecode">
        {bytecode}
      </Code>
    )
  )
};
