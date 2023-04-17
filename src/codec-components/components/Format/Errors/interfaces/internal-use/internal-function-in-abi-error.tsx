import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "InternalFunctionInABIError";

export const { InternalFunctionInABIError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.InternalFunctionInABIError) => <Code>{data.kind}</Code>
  )
};
