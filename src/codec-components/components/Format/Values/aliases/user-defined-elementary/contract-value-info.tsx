import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isContractValueInfoKnown } from "@/utils/type-guards/other/contract-value-info-known";
import { ContractValueInfoKnown } from "@/components/Format/Values/interfaces/user-defined-elementary/contract-value-info-known";
import { ContractValueInfoUnknown } from "@/components/Format/Values/interfaces/user-defined-elementary/contract-value-info-unknown";

const displayName = "ContractValueInfo";

export const { ContractValueInfo } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.ContractValueInfo) =>
      isContractValueInfoKnown(data) ? (
        <ContractValueInfoKnown data={data} />
      ) : (
        <ContractValueInfoUnknown data={data} />
      )
  )
};
