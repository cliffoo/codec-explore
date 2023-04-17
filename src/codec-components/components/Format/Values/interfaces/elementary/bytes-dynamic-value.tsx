import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesDynamicValue) => (
      // TODO: Location? Kind?
      <Code color="blue" title={`type: ${type.typeHint || type.typeClass}`}>
        {value.asHex}
      </Code>
    )
  )
};
