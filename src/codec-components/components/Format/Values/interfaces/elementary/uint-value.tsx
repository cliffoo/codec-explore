import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "UintValue";

export const { UintValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.UintValue) => (
      <CodeTooltip
        data={value.asBN.toString()}
        dataOnHover={`type: ${
          type.typeHint || `${type.typeClass}${type.bits}`
        }`}
      />
    )
  )
};
