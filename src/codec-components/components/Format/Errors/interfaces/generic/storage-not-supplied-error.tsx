import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "StorageNotSuppliedError";

export const { StorageNotSuppliedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.StorageNotSuppliedError) => data.slot.toString()
  )
};
