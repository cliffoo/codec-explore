import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "MessageDecoding";

export const { MessageDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.MessageDecoding) => {
      const { bracketDepth } = useInternal();
      return (
        <Container
          prefix={
            <>
              <Code type="contract">{data.class.typeName}</Code>
              <Code type="period">.</Code>
              {/* TODO */}
              <Code type="function">{data.abi?.type || "?"}</Code>
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
          <Code type="bytes" title="type: bytes">
            {data.data}
          </Code>
        </Container>
      );
    }
  )
};
