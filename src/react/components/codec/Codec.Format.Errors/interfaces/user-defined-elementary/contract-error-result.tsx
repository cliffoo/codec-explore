import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isContractError } from "@/utils/type-guards/decoder-error/contract-error";
import { ContractError } from "@/react/components/codec/Codec.Format.Errors/types/user-defined-elementary/contract-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

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
