import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UfixedPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UfixedPaddingError) => data.raw
);
