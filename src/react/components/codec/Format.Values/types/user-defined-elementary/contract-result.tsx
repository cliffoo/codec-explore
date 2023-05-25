import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isContractValue } from "@/utils/type-guards/value-and-result/contract";
import { ContractValue } from "@/react/components/codec/Format.Values/interfaces/user-defined-elementary/contract-value";
import { ContractErrorResult } from "@/react/components/codec/Format.Errors/interfaces/user-defined-elementary/contract-error-result";

export const { ContractResult } = createCodecComponent(
  "ContractResult",
  (data: Format.Values.ContractResult) =>
    isContractValue(data) ? (
      <ContractValue data={data} />
    ) : (
      <ContractErrorResult data={data} />
    )
);
