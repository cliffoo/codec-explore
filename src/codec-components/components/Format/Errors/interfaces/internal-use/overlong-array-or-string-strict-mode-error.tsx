import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "OverlongArrayOrStringStrictModeError";

export const { OverlongArrayOrStringStrictModeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OverlongArrayOrStringStrictModeError) =>
      // TODO
      data.lengthAsBN.toString()
  )
};
