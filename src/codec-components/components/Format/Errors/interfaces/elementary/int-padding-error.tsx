import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "IntPaddingError";

export const { IntPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.IntPaddingError) => data.raw
  )
};
