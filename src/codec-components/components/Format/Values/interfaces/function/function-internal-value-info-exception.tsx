import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionInternalValueInfoException";

export const { FunctionInternalValueInfoException } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoException) => (
      // TODO
      <Code>{data.constructorProgramCounter.toString()}</Code>
    )
  )
};
