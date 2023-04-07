import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";
import { Container } from "@/common/container";

const displayName = "AbiArgument";

export const { AbiArgument } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, name }: Codec.AbiArgument) =>
      name ? (
        <Container prefix={<code>{name}:&nbsp;</code>}>
          <Result data={value} />
        </Container>
      ) : (
        <Result data={value} />
      )
  )
};
