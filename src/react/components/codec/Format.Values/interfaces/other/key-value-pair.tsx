import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ElementaryValue } from "@/react/components/codec/Format.Values/types/general/elementary-value";
import { Result } from "@/react/components/codec/Format.Values/types/general/result";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export const { KeyValuePair } = createCodecComponent(
  "KeyValuePair",
  ({ key, value }: Format.Values.KeyValuePair) => (
    <InjectedNodeProvider
      value={{
        ...useInjectedNode(),
        prefix: {
          prefix: (
            <>
              <InjectedNodeProvider reset>
                <ElementaryValue data={key} />
              </InjectedNodeProvider>
              <Code type="colon">:&nbsp;</Code>
            </>
          )
        }
      }}
    >
      <Result data={value} />
    </InjectedNodeProvider>
  )
);
