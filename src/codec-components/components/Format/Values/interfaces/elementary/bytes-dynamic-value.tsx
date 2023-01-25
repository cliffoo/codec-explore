import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const BytesDynamicValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.BytesDynamicValue) => value.asHex
);
