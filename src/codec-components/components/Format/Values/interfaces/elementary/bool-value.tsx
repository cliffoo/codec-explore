import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const BoolValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.BoolValue) => value.asBoolean.toString()
);
