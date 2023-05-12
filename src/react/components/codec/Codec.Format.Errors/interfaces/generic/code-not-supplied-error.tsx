import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "CodeNotSuppliedError";

export const { CodeNotSuppliedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.CodeNotSuppliedError) => <span>{data.address}</span>
  )
};
