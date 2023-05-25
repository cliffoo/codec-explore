import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ContractPaddingError } from "@/react/components/codec/Format.Errors/interfaces/user-defined-elementary/contract-padding-error";

export const { ContractError } = createCodecComponent(
  "ContractError",
  (data: Format.Errors.ContractError) => <ContractPaddingError data={data} />
);
