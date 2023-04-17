import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "StringValueInfoValid";

export const { StringValueInfoValid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringValueInfoValid) => (
      <Code color="brown" title="type: string">
        "{data.asString}"
      </Code>
    )
  )
};
