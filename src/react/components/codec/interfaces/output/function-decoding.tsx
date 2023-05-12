import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal, InternalProvider } from "@/react/contexts/internal";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "FunctionDecoding";

export const { FunctionDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.FunctionDecoding) => {
      const { bracketDepth } = useInternal();
      return (
        <Container
          prefix={
            <>
              <Code type="contract">{data.class.typeName}</Code>
              <Code type="period">.</Code>
              <Code type="function">{data.abi.name}</Code>
              <Code type="bracket" bracketDepth={bracketDepth}>
                (
              </Code>
            </>
          }
          suffix={
            <Code type="bracket" bracketDepth={bracketDepth}>
              )
            </Code>
          }
        >
          <InternalProvider value={{ bracketDepth: bracketDepth + 1 }}>
            <AbiArguments data={data.arguments} />
          </InternalProvider>
        </Container>
      );
    }
  )
};