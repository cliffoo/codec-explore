import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionExternalValueInfoInvalid";

export const { FunctionExternalValueInfoInvalid } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoInvalid) => data.selector
  )
};
