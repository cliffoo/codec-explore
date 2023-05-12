import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "BoolValue";

export const { BoolValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BoolValue) => (
      <Code type="boolean" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.asBoolean.toString()}
        {useInternal().content?.suffix}
      </Code>
    )
  )
};
