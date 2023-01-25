import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const BytesStaticValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.BytesStaticValue) => value.asHex
);
