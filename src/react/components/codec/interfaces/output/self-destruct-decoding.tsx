import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "SelfDestructDecoding";

export const { SelfDestructDecoding } = {
  [displayName]: createPolymorphicComponent<Codec.SelfDestructDecoding>(
    displayName,
    () => (
      <Container
        prefix={
          <>
            <Code type="function">selfdestruct</Code>
            <Code type="bracket">(</Code>
          </>
        }
        suffix={<Code type="bracket">)</Code>}
        children=""
      />
    )
  )
};
