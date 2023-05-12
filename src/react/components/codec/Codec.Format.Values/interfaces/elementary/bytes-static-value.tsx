import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "BytesStaticValue";

export const { BytesStaticValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesStaticValue) => (
      <Code type="bytes" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.asHex}
        {useInternal().content?.suffix}
      </Code>
    )
  )
};
