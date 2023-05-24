import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ContractValueInfo } from "@/react/components/codec/Codec.Format.Values/types/user-defined-elementary/contract-value-info";

const displayName = "ContractValue";

export const { ContractValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.ContractValue) => (
      <ContractValueInfo data={value} />
    )
  )
};
