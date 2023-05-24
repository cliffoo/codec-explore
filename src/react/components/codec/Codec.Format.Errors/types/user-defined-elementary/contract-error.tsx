import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ContractPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/contract-padding-error";

const displayName = "ContractError";

export const { ContractError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.ContractError) => <ContractPaddingError data={data} />
  )
};
