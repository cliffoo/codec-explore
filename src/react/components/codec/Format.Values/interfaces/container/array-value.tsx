import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { Result } from "@/react/components/codec/Format.Values/types/general/result";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

export const { ArrayValue } = createCodecComponent(
  "ArrayValue",
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
        <BracketDepthProvider>
          {value.map((result, index) => (
            <InjectedNodeProvider
              reset={index === value.length - 1}
              value={{
                content: { suffix: <Code type="comma">,&nbsp;</Code> },
                suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
              }}
              key={index}
            >
              <Result data={result} />
            </InjectedNodeProvider>
          ))}
        </BracketDepthProvider>
      </Container>
    );
  }
);
