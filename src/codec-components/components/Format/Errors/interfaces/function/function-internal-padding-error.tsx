import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionInternalPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FunctionInternalPaddingError) => data.raw
);
