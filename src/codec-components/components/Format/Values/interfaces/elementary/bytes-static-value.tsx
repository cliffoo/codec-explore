import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "BytesStaticValue";

export const { BytesStaticValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.BytesStaticValue) => (
      <CodeTooltip data={value.asHex} dataOnHover="type: bytes" />
    )
  )
};
