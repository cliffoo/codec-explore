import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const EnumValue = createPolymorphicComponent(
  // TODO
  ({ value }: Format.Values.EnumValue) => value.name
);
