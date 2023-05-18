import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import {
  useBracketDepth,
  BracketDepthProvider
} from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "RevertMessageDecoding";

export const { RevertMessageDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.RevertMessageDecoding) => {
      const bracketDepth = useBracketDepth();
      return (
        <Container
          prefix={
            <>
              <Code type="revert-keyword">revert&nbsp;</Code>
              <Code type="error">{data.abi.name}</Code>
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
          <BracketDepthProvider>
            <AbiArguments data={data.arguments} />
          </BracketDepthProvider>
        </Container>
      );
    }
  )
};
