import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { Code } from "@/common/code";

const displayName = "FunctionExternalValueInfoInvalid";

export const { FunctionExternalValueInfoInvalid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoInvalid) => (
      <Code>{data.selector}</Code>
    )
  )
};
