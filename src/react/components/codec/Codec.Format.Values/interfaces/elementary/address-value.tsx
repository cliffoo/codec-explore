import type { Format } from "@truffle/codec";
import { typeStringWithoutLocation } from "@truffle/codec/dist/lib/format/types";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { useInternal } from "@/react/contexts/internal";
import { Code } from "@/react/components/common/code";

const displayName = "AddressValue";

export const { AddressValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.AddressValue) => (
      <Code type="address" title={`type: ${typeStringWithoutLocation(type)}`}>
        {value.asAddress}
        {useInternal().content?.suffix}
      </Code>
    )
  )
};
