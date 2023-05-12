import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "UfixedValue";

export const { UfixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.UfixedValue) => (
      <Code type="number" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.asBig.toString()}
        {useInternal().content?.suffix}
      </Code>
    )
  )
};
