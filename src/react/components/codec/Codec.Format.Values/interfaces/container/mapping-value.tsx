import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { KeyValuePair } from "@/react/components/codec/Codec.Format.Values/interfaces/other/key-value-pair";
import { useInternal, InternalProvider } from "@/react/contexts/internal";
import { Container } from "@/react/components/common/container";
import { Code } from "@/react/components/common/code";

const displayName = "MappingValue";

export const { MappingValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.MappingValue) => {
      const { suffix, bracketDepth } = useInternal();
      const internalProviderValueBase = { bracketDepth: bracketDepth + 1 };
      return (
        <Container
          prefix={
            <Code type="bracket" bracketDepth={bracketDepth}>
              {"{"}
            </Code>
          }
          suffix={
            <>
              <Code type="bracket" bracketDepth={bracketDepth}>
                {"}"}
              </Code>
              {suffix?.suffix}
            </>
          }
        >
          {value.map((keyValuePair, index) => (
            <InternalProvider
              value={
                index !== value.length - 1
                  ? {
                      ...internalProviderValueBase,
                      content: { suffix: <Code type="comma">,&nbsp;</Code> },
                      suffix: { suffix: <Code type="comma">,&nbsp;</Code> }
                    }
                  : internalProviderValueBase
              }
              key={index}
            >
              <KeyValuePair data={keyValuePair} />
            </InternalProvider>
          ))}
        </Container>
      );
    }
  )
};
