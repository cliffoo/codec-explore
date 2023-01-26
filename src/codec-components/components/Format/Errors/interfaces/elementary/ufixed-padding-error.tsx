import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UfixedPaddingError";

export const { UfixedPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UfixedPaddingError) => data.raw
  )
};
