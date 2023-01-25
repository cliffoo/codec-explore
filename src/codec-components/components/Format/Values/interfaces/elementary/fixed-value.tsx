import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FixedValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.FixedValue) => value.asBig.toString()
);
