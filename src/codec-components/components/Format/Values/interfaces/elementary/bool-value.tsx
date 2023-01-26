import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BoolValue";

export const { BoolValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.BoolValue) => value.asBoolean.toString()
  )
};
