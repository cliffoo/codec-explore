import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Result } from "@/components/Format/Values/aliases/general/result";
import { Container } from "@/common/container";
import { Code } from "@/common/code";

const displayName = "AbiArgument";

export const { AbiArgument } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, name }: Codec.AbiArgument) =>
      name ? (
        <Container prefix={<Code color="darkblue">{name}:&nbsp;</Code>}>
          <Result data={value} />
        </Container>
      ) : (
        <Result data={value} />
      )
  )
};
