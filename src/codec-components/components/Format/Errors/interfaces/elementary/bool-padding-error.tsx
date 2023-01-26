import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BoolPaddingError";

export const { BoolPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolPaddingError) => data.raw
  )
};
