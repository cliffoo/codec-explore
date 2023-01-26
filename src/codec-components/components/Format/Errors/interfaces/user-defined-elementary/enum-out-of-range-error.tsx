import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "EnumOutOfRangeError";

export const { EnumOutOfRangeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumOutOfRangeError) => data.rawAsBN.toString()
  )
};
