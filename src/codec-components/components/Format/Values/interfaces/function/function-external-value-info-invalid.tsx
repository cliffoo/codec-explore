import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionExternalValueInfoInvalid = createPolymorphicComponent(
  // TODO
  (data: Format.Values.FunctionExternalValueInfoInvalid) => data.selector
);
