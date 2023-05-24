import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "ContractValueInfoUnknown";

export const { ContractValueInfoUnknown } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoUnknown) => (
      <span>{data.address}</span>
    )
  )
};
