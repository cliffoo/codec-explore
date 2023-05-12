import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "UnknownCreationDecoding";

export const { UnknownCreationDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ bytecode }: Codec.UnknownCreationDecoding) => (
      // TODO
      <Code type="bytes" title="contract (unknown) creation">
        {bytecode}
      </Code>
    )
  )
};
