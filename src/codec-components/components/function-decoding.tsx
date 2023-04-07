import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Container } from "@/common/container";
import { AbiArguments } from "@/common/abi-arguments";

const displayName = "FunctionDecoding";

export const { FunctionDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.FunctionDecoding) => (
      <Container
        prefix={
          <code>
            {data.class.typeName}.{data.abi.name}(
          </code>
        }
        suffix={<code>)</code>}
      >
        <AbiArguments data={data.arguments} />
      </Container>
    )
  )
};
