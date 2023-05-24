import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionExternalValueInfoInvalid";

export const { FunctionExternalValueInfoInvalid } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Values.FunctionExternalValueInfoInvalid) => (
      <span>{data.selector}</span>
    )
  )
};
