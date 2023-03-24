import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "IntValue";

export const { IntValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.IntValue) => (
      <CodeTooltip
        data={value.asBN.toString()}
        dataOnHover={`type: int${type.bits}`}
      />
    )
  )
};
