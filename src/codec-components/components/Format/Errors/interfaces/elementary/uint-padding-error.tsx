import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UintPaddingError";

export const { UintPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UintPaddingError) => data.raw
  )
};
