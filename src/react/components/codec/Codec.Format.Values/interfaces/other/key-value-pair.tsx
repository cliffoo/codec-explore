import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ElementaryValue } from "@/react/components/codec/Codec.Format.Values/types/general/elementary-value";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import { InjectedNodeProvider } from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "KeyValuePair";

export const { KeyValuePair } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ key, value }: Format.Values.KeyValuePair) => (
      <Container
        prefix={
          <>
            <InjectedNodeProvider reset>
              <ElementaryValue data={key} />
            </InjectedNodeProvider>
            <Code type="colon">:&nbsp;</Code>
          </>
        }
      >
        <Result data={value} />
      </Container>
    )
  )
};
