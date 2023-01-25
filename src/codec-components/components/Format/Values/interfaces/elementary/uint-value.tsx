import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UintValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.UintValue) => value.asBN.toString()
);
