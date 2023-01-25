import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionExternalValueInfoKnown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionExternalValueInfoKnown) => data.abi.name
);
