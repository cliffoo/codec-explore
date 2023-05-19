import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { KeyValuePair } from "@/react/components/codec/Codec.Format.Values/interfaces/other/key-value-pair";
import {
  useBracketDepth,
  BracketDepthProvider
} from "@/react/contexts/internal/bracket-depth";
import {
  useInjectedNode,
  InjectedNodeProvider
} from "@/react/contexts/internal/injected-node";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "MappingValue";

export const { MappingValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.MappingValue) => {
      const { prefix, suffix } = useInjectedNode();
      const bracketDepth = useBracketDepth();
      return (
        <Container
          prefix={
            <>
              {prefix?.prefix}
              <Code type="bracket" bracketDepth={bracketDepth}>
                {"{"}
              </Code>
            </>
          }
          suffix={
            <>
              <Code type="bracket" bracketDepth={bracketDepth}>
                {"}"}
              </Code>
              {suffix?.suffix}
            </>
          }
          empty={value.length === 0}
        >
          {value.map((keyValuePair, index) => (
            <BracketDepthProvider key={index}>
              <InjectedNodeProvider
                reset={index === value.length - 1}
                value={{
                  content: { suffix: <Code type="comma">,&nbsp;</Code> },
                  suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
                }}
              >
                <KeyValuePair data={keyValuePair} />
              </InjectedNodeProvider>
            </BracketDepthProvider>
          ))}
        </Container>
      );
    }
  )
};
