import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionExternalValueInfoKnown";

export const { FunctionExternalValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoKnown) => (
      <Code>{data.abi.name}</Code>
    )
  )
};
