import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "UnsupportedConstantError";

export const { UnsupportedConstantError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UnsupportedConstantError) => (
      <Code>{data.definition.name}</Code>
    )
  )
};
