import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionExternalStackPaddingError";

export const { FunctionExternalStackPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalStackPaddingError) => data.rawAddress
  )
};
