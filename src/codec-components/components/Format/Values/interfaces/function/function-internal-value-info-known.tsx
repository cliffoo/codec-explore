import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionInternalValueInfoKnown";

export const { FunctionInternalValueInfoKnown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionInternalValueInfoKnown) => data.name
  )
};
