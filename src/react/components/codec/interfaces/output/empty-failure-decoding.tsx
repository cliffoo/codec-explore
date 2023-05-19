import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Code } from "@/react/components/common/code";

const displayName = "EmptyFailureDecoding";

export const { EmptyFailureDecoding } = {
  [displayName]: createPolymorphicComponent<Codec.EmptyFailureDecoding>(
    displayName,
    () => (
      <Code type="revert-keyword">
        revert<Code type="bracket">()</Code>
      </Code>
    )
  )
};
