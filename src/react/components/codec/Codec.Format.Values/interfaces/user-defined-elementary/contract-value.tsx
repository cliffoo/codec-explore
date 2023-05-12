import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ContractValueInfo } from "@/react/components/codec/Codec.Format.Values/types/user-defined-elementary/contract-value-info";

const displayName = "ContractValue";

export const { ContractValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.ContractValue) => (
      <ContractValueInfo data={value} />
    )
  )
};
