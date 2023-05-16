import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import {
  useBracketDepth,
  BracketDepthProvider
} from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "ConstructorDecoding";

export const { ConstructorDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.ConstructorDecoding) => {
      const bracketDepth = useBracketDepth();
      return (
        <Container
          prefix={
            <>
              <Code type="new-keyword">new&nbsp;</Code>
              <Code type="contract">{data.class.typeName}</Code>
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
          <BracketDepthProvider increment>
            <AbiArguments data={data.arguments} />
          </BracketDepthProvider>
        </Container>
      );
    }
  )
};
