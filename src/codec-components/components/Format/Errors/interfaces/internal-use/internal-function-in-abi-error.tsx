import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "InternalFunctionInABIError";

export const { InternalFunctionInABIError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.InternalFunctionInABIError) => data.kind
  )
};
