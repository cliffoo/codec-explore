import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const UserDefinedTypeNotFoundError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.UserDefinedTypeNotFoundError) => data.kind
);
