import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isContractValue } from "@/utils/type-guards/value-and-result/contract";
import { ContractValue } from "@/components/Format/Values/interfaces/user-defined-elementary/contract-value";
import { ContractErrorResult } from "@/components/Format/Errors/interfaces/user-defined-elementary/contract-error-result";

const displayName = "ContractResult";

export const { ContractResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.ContractResult) =>
      isContractValue(data) ? (
        <ContractValue data={data} />
      ) : (
        <ContractErrorResult data={data} />
      )
  )
};
