import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "StorageNotSuppliedError";

export const { StorageNotSuppliedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.StorageNotSuppliedError) => (
      <span>{data.slot.toString()}</span>
    )
  )
};
