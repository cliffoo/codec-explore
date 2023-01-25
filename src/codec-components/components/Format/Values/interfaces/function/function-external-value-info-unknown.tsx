import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionExternalValueInfoUnknown = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionExternalValueInfoUnknown) => data.selector
);
