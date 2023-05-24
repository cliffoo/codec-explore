import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isContractValue } from "@/utils/type-guards/value-and-result/contract";
import { ContractValue } from "@/react/components/codec/Codec.Format.Values/interfaces/user-defined-elementary/contract-value";
import { ContractErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/user-defined-elementary/contract-error-result";

const displayName = "ContractResult";

export const { ContractResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.ContractResult) =>
      isContractValue(data) ? (
        <ContractValue data={data} />
      ) : (
        <ContractErrorResult data={data} />
      )
  )
};
