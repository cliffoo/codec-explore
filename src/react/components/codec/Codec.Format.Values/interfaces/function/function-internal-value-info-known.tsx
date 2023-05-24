import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionInternalValueInfoKnown";

export const { FunctionInternalValueInfoKnown } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionInternalValueInfoKnown) => (
      <span>{data.name}</span>
    )
  )
};
