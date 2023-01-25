import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ContractPaddingError } from "@/components/Format/Errors/interfaces/user-defined-elementary/contract-padding-error";

export const ContractError = createPolymorphicComponent(
  (data: Format.Errors.ContractError) => <ContractPaddingError data={data} />
);
