import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionExternalStackPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FunctionExternalStackPaddingError) => data.rawAddress
);
