import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionExternalValueInfoUnknown";

export const { FunctionExternalValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoUnknown) => (
      <Code>{data.selector}</Code>
    )
  )
};
