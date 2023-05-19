import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "BytesStaticValue";

export const { BytesStaticValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesStaticValue) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="bytes" title={`type: ${typeStringWithoutLocation(type)}`}>
          {prefix?.prefix}
          {value.asHex}
          {content?.suffix}
        </Code>
      );
    }
  )
};
