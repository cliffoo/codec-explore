import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "AddressPaddingError";

export const { AddressPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.AddressPaddingError) => data.raw
  )
};
