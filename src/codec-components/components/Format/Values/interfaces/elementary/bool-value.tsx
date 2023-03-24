import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "BoolValue";

export const { BoolValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.BoolValue) => (
      <CodeTooltip
        data={value.asBoolean.toString()}
        dataOnHover="type: boolean"
      />
    )
  )
};
