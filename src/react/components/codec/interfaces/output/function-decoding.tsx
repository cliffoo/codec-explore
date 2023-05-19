import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "FunctionDecoding";

export const { FunctionDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.FunctionDecoding) => {
      return (
        <Container
          prefix={
            <>
              <Code type="contract">{data.class.typeName}</Code>
              <Code type="period">.</Code>
              <Code type="function">{data.abi.name}</Code>
              <Code type="bracket">(</Code>
            </>
          }
          suffix={<Code type="bracket">)</Code>}
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
