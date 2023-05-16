import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInjectedNode } from "@/react/contexts/internal/injected-node";
import { Code } from "@/react/components/common/code";

const displayName = "FixedValue";

export const { FixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.FixedValue) => (
      <Code type="number" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.asBig.toString()}
        {useInjectedNode().content?.suffix}
      </Code>
    )
  )
};
