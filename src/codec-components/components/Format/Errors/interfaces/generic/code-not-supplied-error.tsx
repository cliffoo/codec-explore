import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "CodeNotSuppliedError";

export const { CodeNotSuppliedError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.CodeNotSuppliedError) => data.address
  )
};
