import type * as Codec from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "MessageDecoding";

export const { MessageDecoding } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Codec.MessageDecoding) => {
      const empty = data.data === "0x" || data.data === "";
      return (
        <Container
          prefix={
            <>
              <Code type="contract">{data.class.typeName}</Code>
              <Code type="period">.</Code>
              {/* TODO */}
              <Code type="function">{data.abi?.type || "?"}</Code>
              <Code type="bracket">(</Code>
            </>
          }
          suffix={<Code type="bracket">)</Code>}
          empty={empty}
        >
          <Code type="bytes" title="type: bytes">
            {!empty && data.data}
          </Code>
        </Container>
      );
    }
  )
};
