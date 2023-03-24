import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "FixedValue";

export const { FixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.FixedValue) => (
      <CodeTooltip
        data={value.asBig.toString()}
        dataOnHover={`type: fixed${type.bits}x${type.places}`}
      />
    )
  )
};
