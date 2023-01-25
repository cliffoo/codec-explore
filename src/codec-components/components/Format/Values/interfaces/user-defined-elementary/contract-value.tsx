import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ContractValueInfo } from "@/components/Format/Values/aliases/user-defined-elementary/contract-value-info";

export const ContractValue = createPolymorphicComponent(
  ({ value }: Format.Values.ContractValue) => <ContractValueInfo data={value} />
);
