import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionExternalValueInfoKnown";

export const { FunctionExternalValueInfoKnown } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoKnown) => (
      <span>{data.abi.name}</span>
    )
  )
};
