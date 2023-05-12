import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "IndexedReferenceTypeError";

export const { IndexedReferenceTypeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.IndexedReferenceTypeError) => <span>{data.raw}</span>
  )
};
