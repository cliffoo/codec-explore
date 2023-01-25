import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UintPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UintPaddingError) => data.raw
);
