import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Container } from "@/common/container";
import { Code } from "@/common/code";
import { AbiArguments } from "@/common/abi-arguments";

const displayName = "FunctionDecoding";

export const { FunctionDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.FunctionDecoding) => (
      <Container
        prefix={
          <>
            <Code color="blue">{data.class.typeName}</Code>
            <Code>.</Code>
            <Code color="purple">{data.abi.name}</Code>
            <Code color="blue">(</Code>
          </>
        }
        suffix={<Code color="blue">)</Code>}
      >
        <AbiArguments data={data.arguments} />
      </Container>
    )
  )
};
