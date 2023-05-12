import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "AbiArgument";

export const { AbiArgument } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, name }: Codec.AbiArgument) =>
      name ? (
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
      ) : (
        <Result data={value} />
      )
  )
};
