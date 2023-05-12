import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "UnknownCallDecoding";

export const { UnknownCallDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ data }: Codec.UnknownCallDecoding) => (
      // TODO
      <Code type="bytes" title="data sent to contract (unknown)">
        {data}
      </Code>
    )
  )
};
