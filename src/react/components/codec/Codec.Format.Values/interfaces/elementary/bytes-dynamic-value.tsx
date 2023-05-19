import type { Format } from "@truffle/codec";
import { typeString } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesDynamicValue) => {
      const { prefix, content } = useInjectedNode();
      return (
        <Code type="bytes" title={`type: ${typeString(type)}`}>
          {prefix?.prefix}
          {value.asHex}
          {content?.suffix}
        </Code>
      );
    }
  )
};
