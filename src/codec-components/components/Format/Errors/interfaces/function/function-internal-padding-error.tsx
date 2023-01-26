import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionInternalPaddingError";

export const { FunctionInternalPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionInternalPaddingError) => data.raw
  )
};
