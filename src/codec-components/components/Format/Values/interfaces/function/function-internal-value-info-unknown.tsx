import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionInternalValueInfoUnknown";

export const { FunctionInternalValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoUnknown) => (
      // TODO
      <Code>{data.constructorProgramCounter.toString()}</Code>
    )
  )
};
