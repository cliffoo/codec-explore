import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionExternalNonStackPaddingError";

export const { FunctionExternalNonStackPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalNonStackPaddingError) => (
      <span>{data.raw}</span>
    )
  )
};
