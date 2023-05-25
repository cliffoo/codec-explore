import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isContractValueInfoKnown } from "@/utils/type-guards/other/contract-value-info-known";
import { ContractValueInfoKnown } from "@/react/components/codec/Format.Values/interfaces/user-defined-elementary/contract-value-info-known";
import { ContractValueInfoUnknown } from "@/react/components/codec/Format.Values/interfaces/user-defined-elementary/contract-value-info-unknown";

export const { ContractValueInfo } = createCodecComponent(
  "ContractValueInfo",
  (data: Format.Values.ContractValueInfo) =>
    isContractValueInfoKnown(data) ? (
      <ContractValueInfoKnown data={data} />
    ) : (
      <ContractValueInfoUnknown data={data} />
    )
);
