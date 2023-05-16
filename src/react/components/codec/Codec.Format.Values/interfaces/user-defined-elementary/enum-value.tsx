import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "EnumValue";

export const { EnumValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.EnumValue) => (
      <Code type="enum" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.name}
        {useInjectedNode().content?.suffix}
      </Code>
    )
  )
};
