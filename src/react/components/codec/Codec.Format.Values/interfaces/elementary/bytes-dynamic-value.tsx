import type { Format } from "@truffle/codec";
import { typeString } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesDynamicValue) => (
      <Code type="bytes" title={`type: ${typeString(type)}`}>
        {value.asHex}
        {useInjectedNode().content?.suffix}
      </Code>
    )
  )
};
