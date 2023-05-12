import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal, InternalProvider } from "@/react/contexts/internal";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "ReturnDecoding";

export const { ReturnDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.ReturnDecoding) => {
      const { bracketDepth } = useInternal();
      return (
        <Container
          prefix={<Code type="bracket">(</Code>}
          suffix={<Code type="bracket">)</Code>}
        >
          <InternalProvider value={{ bracketDepth: bracketDepth + 1 }}>
            <AbiArguments data={data.arguments} />
          </InternalProvider>
        </Container>
      );
    }
  )
};
