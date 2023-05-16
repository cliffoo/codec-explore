import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import {
  useBracketDepth,
  BracketDepthProvider
} from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "AnonymousDecoding";

export const { AnonymousDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.AnonymousDecoding) => {
      const bracketDepth = useBracketDepth();
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
          <BracketDepthProvider increment>
            <AbiArguments data={data.arguments} />
          </BracketDepthProvider>
        </Container>
      );
    }
  )
};
