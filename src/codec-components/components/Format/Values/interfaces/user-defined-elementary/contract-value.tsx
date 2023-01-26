import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ContractValueInfo } from "@/components/Format/Values/aliases/user-defined-elementary/contract-value-info";

const displayName = "ContractValue";

export const { ContractValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.ContractValue) => (
      <ContractValueInfo data={value} />
    )
  )
};
