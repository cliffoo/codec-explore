import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionExternalNonStackPaddingError";

export const { FunctionExternalNonStackPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalNonStackPaddingError) => (
      <Code>{data.raw}</Code>
    )
  )
};
