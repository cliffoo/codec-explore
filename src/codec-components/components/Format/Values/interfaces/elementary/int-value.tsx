import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const IntValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.IntValue) => value.asBN.toString()
);
