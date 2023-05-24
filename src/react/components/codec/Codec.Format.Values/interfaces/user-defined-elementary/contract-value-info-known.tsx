import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "ContractValueInfoKnown";

export const { ContractValueInfoKnown } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Values.ContractValueInfoKnown) => <span>{data.address}</span>
  )
};
