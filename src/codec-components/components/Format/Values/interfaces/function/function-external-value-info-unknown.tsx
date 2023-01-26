import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionExternalValueInfoUnknown";

export const { FunctionExternalValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoUnknown) => data.selector
  )
};
