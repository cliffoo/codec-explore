import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FixedPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.FixedPaddingError) => data.raw
);
