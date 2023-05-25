import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { NameValuePair } from "@/react/components/codec/Format.Values/interfaces/other/name-value-pair";
import { BracketDepthProvider } from "@/react/contexts/internal/bracket-depth";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

export const { StructValue } = createCodecComponent(
  "StructValue",
  ({ value, type }: Format.Values.StructValue) => {
    const { prefix, suffix } = useInjectedNode();
    return (
      <Container
        prefix={
          <>
            {prefix?.prefix}
            {type.kind === "local" && (
              <>
                <Code type="contract">{type.definingContractName}</Code>
                <Code type="period">.</Code>
              </>
            )}
            <Code type="struct">{type.typeName}</Code>
            <Code type="bracket">(</Code>
            <BracketDepthProvider>
              <Code type="bracket">{"{"}</Code>
            </BracketDepthProvider>
          </>
        }
        suffix={
          <>
            <BracketDepthProvider>
              <Code type="bracket">{"}"}</Code>
            </BracketDepthProvider>
            <Code type="bracket">)</Code>
            {suffix?.suffix}
          </>
        }
        empty={value.length === 0}
      >
        <BracketDepthProvider>
          {value.map((nameValuePair, index) => (
            <InjectedNodeProvider
              reset={index === value.length - 1}
              value={{
                content: { suffix: <Code type="comma">,&nbsp;</Code> },
                suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
              }}
              key={index}
            >
              <NameValuePair data={nameValuePair} />
            </InjectedNodeProvider>
          ))}
        </BracketDepthProvider>
      </Container>
    );
  }
);
