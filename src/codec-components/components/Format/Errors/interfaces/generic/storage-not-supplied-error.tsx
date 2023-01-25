import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const StorageNotSuppliedError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.StorageNotSuppliedError) => data.slot.toString()
);
