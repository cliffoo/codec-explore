import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "ArrayValue";

export const { ArrayValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.ArrayValue) => {
      const { prefix, suffix } = useInjectedNode();
      return (
        <Container
          prefix={
            <>
              {prefix?.prefix}
              <Code type="bracket">[</Code>
            </>
          }
          suffix={
            <>
              <Code type="bracket">]</Code>
              {suffix?.suffix}
            </>
          }
          empty={value.length === 0}
        >
          {value.map((result, index) => (
            <BracketDepthProvider key={index}>
              <InjectedNodeProvider
                reset={index === value.length - 1}
                value={{
                  content: { suffix: <Code type="comma">,&nbsp;</Code> },
                  suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
                }}
              >
                <Result data={result} />
              </InjectedNodeProvider>
            </BracketDepthProvider>
          ))}
        </Container>
      );
    }
  )
};
