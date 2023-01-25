import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const BoolPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BoolPaddingError) => data.raw
);
