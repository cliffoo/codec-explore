import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesDynamicValue) => (
      // TODO: Location? Kind?
      <CodeTooltip
        data={value.asHex}
        dataOnHover={`type: ${type.typeHint || type.typeClass}`}
      />
    )
  )
};
