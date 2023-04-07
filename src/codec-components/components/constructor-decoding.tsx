import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Container } from "@/common/container";
import { AbiArguments } from "@/common/abi-arguments";

const displayName = "ConstructorDecoding";

export const { ConstructorDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.ConstructorDecoding) => (
      <Container
        prefix={<code>new {data.class.typeName}(</code>}
        suffix={<code>)</code>}
      >
        <AbiArguments data={data.arguments} />
      </Container>
    )
  )
};
