import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionExternalNonStackPaddingError";

export const { FunctionExternalNonStackPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalNonStackPaddingError) => data.raw
  )
};
