import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UfixedValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.UfixedValue) => value.asBig.toString()
);
