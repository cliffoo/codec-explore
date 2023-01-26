import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionExternalValueInfoKnown";

export const { FunctionExternalValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoKnown) => data.abi.name
  )
};
