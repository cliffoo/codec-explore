import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionInternalPaddingError";

export const { FunctionInternalPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionInternalPaddingError) => (
      <Code>{data.raw}</Code>
    )
  )
};
