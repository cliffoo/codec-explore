import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionInternalValueInfoKnown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionInternalValueInfoKnown) => data.name
);
