import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "EnumPaddingError";

export const { EnumPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumPaddingError) => data.raw
  )
};
