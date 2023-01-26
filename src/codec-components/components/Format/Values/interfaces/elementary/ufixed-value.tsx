import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UfixedValue";

export const { UfixedValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.UfixedValue) => value.asBig.toString()
  )
};
