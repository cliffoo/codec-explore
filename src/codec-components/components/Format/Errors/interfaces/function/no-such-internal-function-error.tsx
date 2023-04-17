import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "NoSuchInternalFunctionError";

export const { NoSuchInternalFunctionError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.NoSuchInternalFunctionError) => (
      // TODO
      <Code>{data.constructorProgramCounter.toString()}</Code>
    )
  )
};
