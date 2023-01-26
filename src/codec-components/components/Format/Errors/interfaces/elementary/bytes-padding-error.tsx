import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BytesPaddingError";

export const { BytesPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BytesPaddingError) => data.raw
  )
};
