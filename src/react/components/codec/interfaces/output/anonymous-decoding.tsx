import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "AnonymousDecoding";

export const { AnonymousDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.AnonymousDecoding) => {
      return (
        <Container
          prefix={
            <>
              <Code type="event-keyword">event&nbsp;</Code>
              <Code type="event">{data.abi.name}</Code>
              <Code type="bracket">(</Code>
            </>
          }
          suffix={
            <>
              <Code type="bracket">)</Code>
              {/* TODO */}
              <Code type="default">&nbsp;anonymous</Code>
            </>
          }
          empty={data.arguments.length === 0}
        >
          <BracketDepthProvider>
            <AbiArguments data={data.arguments} />
          </BracketDepthProvider>
        </Container>
      );
    }
  )
};
