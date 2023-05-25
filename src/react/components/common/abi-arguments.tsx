import type * as Codec from "@truffle/codec";
import { createCommonComponent } from "@/react/utils/create-common-component";
import { AbiArgument } from "@/react/components/codec/interfaces/output/abi-argument";
import { InjectedNodeProvider } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

export interface AbiArgumentsProps {
  data: Codec.AbiArgument[];
}

export const { AbiArguments } = createCommonComponent(
  "AbiArguments",
  ({ data }) => (
    <>
      {data.map((abiArgumentData, index) => (
        <InjectedNodeProvider
          reset={index === data.length - 1}
          value={{
            content: { suffix: <Code type="comma">,&nbsp;</Code> },
            suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
          }}
          key={index}
        >
          <AbiArgument data={abiArgumentData} />
        </InjectedNodeProvider>
      ))}
    </>
  )
);
