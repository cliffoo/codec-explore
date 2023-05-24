import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionExternalValueInfoUnknown";

export const { FunctionExternalValueInfoUnknown } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoUnknown) => (
      <span>{data.selector}</span>
    )
  )
};
