import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const BytesPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.BytesPaddingError) => data.raw
);
