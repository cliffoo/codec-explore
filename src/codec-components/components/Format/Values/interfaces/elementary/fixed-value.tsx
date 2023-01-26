import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FixedValue";

export const { FixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.FixedValue) => value.asBig.toString()
  )
};
