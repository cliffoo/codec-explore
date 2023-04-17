import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "UintValue";

export const { UintValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.UintValue) => (
      <Code
        color="seagreen"
        title={`type: ${type.typeHint || `${type.typeClass}${type.bits}`}`}
      >
        {value.asBN.toString()}
      </Code>
    )
  )
};
