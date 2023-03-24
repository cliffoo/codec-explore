import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "FixedValue";

export const { FixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.FixedValue) => (
      <CodeTooltip
        data={value.asBig.toString()}
        dataOnHover={`type: ${
          type.typeHint || `${type.typeClass}${type.bits}x${type.places}`
        }`}
      />
    )
  )
};
