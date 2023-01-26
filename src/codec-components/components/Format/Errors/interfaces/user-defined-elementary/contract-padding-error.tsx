import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "ContractPaddingError";

export const { ContractPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.ContractPaddingError) => data.raw
  )
};
