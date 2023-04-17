import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Container } from "@/common/container";
import { Code } from "@/common/code";
import { AbiArguments } from "@/common/abi-arguments";

const displayName = "ConstructorDecoding";

export const { ConstructorDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.ConstructorDecoding) => (
      <Container
        prefix={
          <>
            <Code color="red">new </Code>
            <Code color="blue">{data.class.typeName}(</Code>
          </>
        }
        suffix={<Code color="blue">)</Code>}
      >
        <AbiArguments data={data.arguments} />
      </Container>
    )
  )
};
