import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "SelfDestructDecoding";

export const { SelfDestructDecoding } = {
  [displayName]: createPolymorphicComponent<Codec.SelfDestructDecoding>(
    displayName,
    () => (
      <Code type="function">
        selfdestruct<Code type="bracket">()</Code>
      </Code>
    )
  )
};
