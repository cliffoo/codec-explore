import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UintValue";

export const { UintValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.UintValue) => value.asBN.toString()
  )
};
