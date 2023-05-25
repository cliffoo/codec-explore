import type * as Codec from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import { InjectedNodeProvider } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export const { StateVariable } = createCodecComponent(
  "StateVariable",
  (data: Codec.StateVariable) => (
    <InjectedNodeProvider
      value={{
        prefix: {
          prefix: (
            <>
              <Code type="contract">{data.class.typeName}</Code>
              <Code type="period">.</Code>
              <Code type="name">{data.name}</Code>
              <Code type="colon">:&nbsp;</Code>
            </>
          )
        }
      }}
    >
      <Result data={data.value} />
    </InjectedNodeProvider>
  )
);
