import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "UserDefinedTypeNotFoundError";

export const { UserDefinedTypeNotFoundError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.UserDefinedTypeNotFoundError) => data.kind
  )
};
