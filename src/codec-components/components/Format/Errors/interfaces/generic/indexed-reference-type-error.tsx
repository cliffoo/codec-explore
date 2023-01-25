import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const IndexedReferenceTypeError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.IndexedReferenceTypeError) => data.raw
);
