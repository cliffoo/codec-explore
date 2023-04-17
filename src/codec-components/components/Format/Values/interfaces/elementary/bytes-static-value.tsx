import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "BytesStaticValue";

export const { BytesStaticValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesStaticValue) => (
      // TODO: Length? Kind?
      <Code color="seagreen" title={`type: ${type.typeHint || type.typeClass}`}>
        {value.asHex}
      </Code>
    )
  )
};
