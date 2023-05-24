import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "AbiArgument";

export const { AbiArgument } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value, name }: Codec.AbiArgument) => (
      <InjectedNodeProvider
        value={{
          ...useInjectedNode(),
          prefix: {
            prefix: name ? (
              <>
                <Code type="name">{name}</Code>
                <Code type="colon">:&nbsp;</Code>
              </>
            ) : undefined
          }
        }}
      >
        <Result data={value} />
      </InjectedNodeProvider>
    )
  )
};
