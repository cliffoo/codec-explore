import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "BoolValue";

export const { BoolValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BoolValue) => (
      <Code color="blue" title={`type: ${type.typeHint || type.typeClass}`}>
        {value.asBoolean.toString()}
      </Code>
    )
  )
};
