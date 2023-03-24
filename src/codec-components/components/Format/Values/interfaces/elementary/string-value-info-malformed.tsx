import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "StringValueInfoMalformed";

export const { StringValueInfoMalformed } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoMalformed) => (
      <CodeTooltip data={data.asHex} dataOnHover="type: string (malformed)" />
    )
  )
};
