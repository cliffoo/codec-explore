import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "BytesStaticValue";

export const { BytesStaticValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value, type }: Format.Values.BytesStaticValue) => (
      // TODO: Length? Kind?
      <CodeTooltip
        data={value.asHex}
        dataOnHover={`type: ${type.typeHint || type.typeClass}`}
      />
    )
  )
};
