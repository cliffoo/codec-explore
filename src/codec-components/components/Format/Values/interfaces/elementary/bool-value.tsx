import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "BoolValue";

export const { BoolValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BoolValue) => (
      <CodeTooltip
        data={value.asBoolean.toString()}
        dataOnHover={`type: ${type.typeHint || type.typeClass}`}
      />
    )
  )
};
