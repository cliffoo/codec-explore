import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionExternalNonStackPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FunctionExternalNonStackPaddingError) => data.raw
);
