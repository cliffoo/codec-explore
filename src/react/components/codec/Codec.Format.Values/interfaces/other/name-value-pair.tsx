import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "NameValuePair";

export const { NameValuePair } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ name, value }: Format.Values.NameValuePair) => (
      <Container
        prefix={
          <>
            <Code type="name">{name}</Code>
            <Code type="colon">:&nbsp;</Code>
          </>
        }
      >
        <Result data={value} />
      </Container>
    )
  )
};
