import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const IntPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.IntPaddingError) => data.raw
);
