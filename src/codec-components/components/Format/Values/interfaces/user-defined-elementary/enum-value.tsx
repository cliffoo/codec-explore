import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "EnumValue";

export const { EnumValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.EnumValue) => value.name
  )
};
