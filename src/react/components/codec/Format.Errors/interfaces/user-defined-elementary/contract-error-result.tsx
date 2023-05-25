import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isContractError } from "@/utils/type-guards/decoder-error/contract-error";
import { ContractError } from "@/react/components/codec/Format.Errors/types/user-defined-elementary/contract-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { ContractErrorResult } = createCodecComponent(
  "ContractErrorResult",
  ({ error }: Format.Errors.ContractErrorResult) =>
    isContractError(error) ? (
      <ContractError data={error} />
    ) : (
      <GenericError data={error} />
    )
);