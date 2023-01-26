import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FixedPaddingError";

export const { FixedPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FixedPaddingError) => data.raw
  )
};
