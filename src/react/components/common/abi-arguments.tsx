import type * as Codec from "@truffle/codec";
import { AbiArgument } from "@/react/components/codec/interfaces/output/abi-argument";
import { useInternal, InternalProvider } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

export interface AbiArgumentsProps {
  data: Codec.AbiArgument[];
}

export function AbiArguments({ data }: AbiArgumentsProps): JSX.Element {
  const { bracketDepth } = useInternal();
  return (
    <>
      {data.map((abiArgumentData, index) => (
        <InternalProvider
          value={
            index !== data.length - 1
              ? {
                  content: { suffix: <Code type="comma">,&nbsp;</Code> },
                  suffix: { suffix: <Code type="comma">,&nbsp;</Code> },
                  bracketDepth
                }
              : { bracketDepth }
          }
          key={index}
        >
          <AbiArgument data={abiArgumentData} />
        </InternalProvider>
      ))}
    </>
  );
}
