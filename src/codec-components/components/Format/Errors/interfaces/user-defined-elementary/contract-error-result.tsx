import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isContractError } from "@/utils/type-guards/decoder-error/contract-error";
import { ContractError } from "@/components/Format/Errors/aliases/user-defined-elementary/contract-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "ContractErrorResult";

export const { ContractErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.ContractErrorResult) =>
      isContractError(error) ? (
        <ContractError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
