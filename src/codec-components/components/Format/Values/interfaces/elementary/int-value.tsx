import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "IntValue";

export const { IntValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.IntValue) => (
      <Code
        color="blue"
        title={`type: ${type.typeHint || `${type.typeClass}${type.bits}`}`}
      >
        {value.asBN.toString()}
      </Code>
    )
  )
};
