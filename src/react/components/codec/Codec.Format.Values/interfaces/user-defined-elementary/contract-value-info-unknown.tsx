import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { ContractValueInfoUnknown } = createCodecComponent(
  "ContractValueInfoUnknown",
  // TODO
  (data: Format.Values.ContractValueInfoUnknown) => <span>{data.address}</span>
);
