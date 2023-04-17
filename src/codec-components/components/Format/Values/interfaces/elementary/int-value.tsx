import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "IntValue";

export const { IntValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.IntValue) => (
      <Code
        color="seagreen"
        title={`type: ${type.typeHint || `${type.typeClass}${type.bits}`}`}
      >
        {value.asBN.toString()}
      </Code>
    )
  )
};
