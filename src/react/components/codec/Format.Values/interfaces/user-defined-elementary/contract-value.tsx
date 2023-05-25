import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ContractValueInfo } from "@/react/components/codec/Format.Values/types/user-defined-elementary/contract-value-info";

export const { ContractValue } = createCodecComponent(
  "ContractValue",
  ({ value }: Format.Values.ContractValue) => <ContractValueInfo data={value} />
);
