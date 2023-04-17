import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionInternalValueInfoKnown";

export const { FunctionInternalValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionInternalValueInfoKnown) => (
      <Code>{data.name}</Code>
    )
  )
};
