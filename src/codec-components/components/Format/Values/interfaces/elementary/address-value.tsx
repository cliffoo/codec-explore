import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const AddressValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.AddressValue) => value.asAddress
);
