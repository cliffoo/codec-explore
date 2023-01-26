import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ContractPaddingError } from "@/components/Format/Errors/interfaces/user-defined-elementary/contract-padding-error";

const displayName = "ContractError";

export const { ContractError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ContractError) => <ContractPaddingError data={data} />
  )
};
