import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "BytesDynamicValue";

export const { BytesDynamicValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.BytesDynamicValue) => (
      <CodeTooltip data={value.asHex} dataOnHover="type: bytes" />
    )
  )
};
