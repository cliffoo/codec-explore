import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const ContractPaddingError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.ContractPaddingError) => data.raw
);
