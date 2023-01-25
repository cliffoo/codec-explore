import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const EnumPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.EnumPaddingError) => data.raw
);
