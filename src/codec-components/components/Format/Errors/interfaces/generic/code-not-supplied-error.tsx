import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const CodeNotSuppliedError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.CodeNotSuppliedError) => data.address
);
