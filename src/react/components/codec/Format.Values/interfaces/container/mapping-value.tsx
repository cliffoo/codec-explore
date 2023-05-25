import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { KeyValuePair } from "@/react/components/codec/Format.Values/interfaces/other/key-value-pair";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

export const { MappingValue } = createCodecComponent(
  "MappingValue",
  ({ value }: Format.Values.MappingValue) => {
    const { prefix, suffix } = useInjectedNode();
    return (
      <Container
        prefix={
          <>
            {prefix?.prefix}
            <Code type="bracket">{"{"}</Code>
          </>
        }
        suffix={
          <>
            <Code type="bracket">{"}"}</Code>
            {suffix?.suffix}
          </>
        }
        empty={value.length === 0}
      >
        <BracketDepthProvider>
          {value.map((keyValuePair, index) => (
            <InjectedNodeProvider
              reset={index === value.length - 1}
              value={{
                content: { suffix: <Code type="comma">,&nbsp;</Code> },
                suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
              }}
              key={index}
            >
              <KeyValuePair data={keyValuePair} />
            </InjectedNodeProvider>
          ))}
        </BracketDepthProvider>
      </Container>
    );
  }
);
