import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "IndexedReferenceTypeError";

export const { IndexedReferenceTypeError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.IndexedReferenceTypeError) => data.raw
  )
};
