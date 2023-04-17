import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionExternalStackPaddingError";

export const { FunctionExternalStackPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalStackPaddingError) => (
      <Code>{data.rawAddress}</Code>
    )
  )
};
