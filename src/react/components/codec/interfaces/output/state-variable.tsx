import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "StateVariable";

export const { StateVariable } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.StateVariable) => (
      <Container
        prefix={
          <>
            <Code type="contract">{data.class.typeName}</Code>
            <Code type="period">.</Code>
            <Code type="name">{data.name}</Code>
            <Code type="colon">:&nbsp;</Code>
          </>
        }
      >
        <Result data={data.value} />
      </Container>
    )
  )
};
