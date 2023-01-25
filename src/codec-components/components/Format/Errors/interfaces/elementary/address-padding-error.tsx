import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const AddressPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.AddressPaddingError) => data.raw
);
