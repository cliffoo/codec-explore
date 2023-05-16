import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

const displayName = "ReturnDecoding";

export const { ReturnDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.ReturnDecoding) => {
      return (
        <Container
          prefix={<Code type="bracket">(</Code>}
          suffix={<Code type="bracket">)</Code>}
        >
          <BracketDepthProvider increment>
            <AbiArguments data={data.arguments} />
          </BracketDepthProvider>
        </Container>
      );
    }
  )
};
