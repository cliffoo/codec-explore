import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "RawReturnDecoding";

export const { RawReturnDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ data }: Codec.RawReturnDecoding) => (
      <Code type="bytes" title="raw return data">
        {data}
      </Code>
    )
  )
};
