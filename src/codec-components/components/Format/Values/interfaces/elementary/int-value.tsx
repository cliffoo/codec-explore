import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "IntValue";

export const { IntValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    ({ value }: Format.Values.IntValue) => value.asBN.toString()
  )
};
