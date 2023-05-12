import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "UintValue";

export const { UintValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.UintValue) => (
      <Code type="number" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.asBN.toString()}
        {useInternal().content?.suffix}
      </Code>
    )
  )
};