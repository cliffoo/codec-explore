import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BoolOutOfRangeError";

export const { BoolOutOfRangeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolOutOfRangeError) => data.rawAsBN.toString()
  )
};
