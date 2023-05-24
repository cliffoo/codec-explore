import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "NameValuePair";

export const { NameValuePair } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ name, value }: Format.Values.NameValuePair) => (
      <InjectedNodeProvider
        value={{
          ...useInjectedNode(),
          prefix: {
            prefix: (
              <>
                <Code type="name">{name}</Code>
                <Code type="colon">:&nbsp;</Code>
              </>
            )
          }
        }}
      >
        <Result data={value} />
      </InjectedNodeProvider>
    )
  )
};
