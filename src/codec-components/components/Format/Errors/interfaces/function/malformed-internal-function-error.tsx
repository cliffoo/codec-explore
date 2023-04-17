import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "MalformedInternalFunctionError";

export const { MalformedInternalFunctionError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.MalformedInternalFunctionError) => (
      // TODO
      <Code>{data.constructorProgramCounter.toString()}</Code>
    )
  )
};
