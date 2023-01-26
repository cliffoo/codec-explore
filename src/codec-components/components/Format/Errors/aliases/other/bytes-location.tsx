import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "BytesLocation";

export const { BytesLocation } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BytesLocation) => data
  )
};
