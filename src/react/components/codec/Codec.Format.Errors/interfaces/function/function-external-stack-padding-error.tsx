import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionExternalStackPaddingError";

export const { FunctionExternalStackPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalStackPaddingError) => (
      <span>{data.rawAddress}</span>
    )
  )
};
