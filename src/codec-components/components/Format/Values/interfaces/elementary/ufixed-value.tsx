import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "UfixedValue";

export const { UfixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.UfixedValue) => (
      <CodeTooltip
        data={value.asBig.toString()}
        dataOnHover={`type: ${
          type.typeHint || `${type.typeClass}${type.bits}x${type.places}`
        }`}
      />
    )
  )
};
