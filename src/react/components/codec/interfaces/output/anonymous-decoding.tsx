import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal, InternalProvider } from "@/react/contexts/internal";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "AnonymousDecoding";

export const { AnonymousDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.AnonymousDecoding) => {
      const { bracketDepth } = useInternal();
      return (
        <Container
          prefix={
            <>
              <Code type="event-keyword">event&nbsp;</Code>
              <Code type="event">{data.abi.name}</Code>
              <Code type="bracket" bracketDepth={bracketDepth}>
                (
              </Code>
            </>
          }
          suffix={
            <>
              <Code type="bracket" bracketDepth={bracketDepth}>
                )
              </Code>
              {/* TODO */}
              <Code type="default">&nbsp;anonymous</Code>
            </>
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
