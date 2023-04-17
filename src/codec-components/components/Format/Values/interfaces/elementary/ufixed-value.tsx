import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "UfixedValue";

export const { UfixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.UfixedValue) => (
      <Code
        color="blue"
        title={`type: ${
          type.typeHint || `${type.typeClass}${type.bits}x${type.places}`
        }`}
      >
        {value.asBig.toString()}
      </Code>
    )
  )
};
