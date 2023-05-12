import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "EmptyFailureDecoding";

export const { EmptyFailureDecoding } = {
  [displayName]: createPolymorphicComponent<Codec.EmptyFailureDecoding>(
    displayName,
    () => (
      <Container
        prefix={
          <>
            <Code type="revert-keyword">revert</Code>
            <Code type="bracket">(</Code>
          </>
        }
        suffix={<Code type="bracket">)</Code>}
        children=""
      />
    )
  )
};
