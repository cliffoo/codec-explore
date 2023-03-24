import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { CodeTooltip } from "@/common/code-tooltip";

const displayName = "StringValueInfoValid";

export const { StringValueInfoValid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoValid) => (
      <CodeTooltip data={data.asString} dataOnHover="type: string" />
    )
  )
};
