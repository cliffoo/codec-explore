import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";
import { AbiArguments } from "@/react/components/common/abi-arguments";

export const { ReturnDecoding } = createCodecComponent(
  "ReturnDecoding",
  (data: Codec.ReturnDecoding) => {
    return (
      <Container
        prefix={<Code type="bracket">(</Code>}
        suffix={<Code type="bracket">)</Code>}
        empty={data.arguments.length === 0}
      >
        <BracketDepthProvider>
          <AbiArguments data={data.arguments} />
        </BracketDepthProvider>
      </Container>
    );
  }
);
