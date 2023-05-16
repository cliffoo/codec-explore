import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { Result } from "@/react/components/codec/Codec.Format.Values/types/general/result";
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

const displayName = "ArrayValue";

export const { ArrayValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.ArrayValue) => {
      const { suffix } = useInjectedNode();
      const bracketDepth = useBracketDepth();
      return (
        <Container
          prefix={
            <Code type="bracket" bracketDepth={bracketDepth}>
              [
            </Code>
          }
          suffix={
            <>
              <Code type="bracket" bracketDepth={bracketDepth}>
                ]
              </Code>
              {suffix?.suffix}
            </>
          }
        >
          {value.map((result, index) => (
            <BracketDepthProvider increment key={index}>
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
