import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FunctionInternalPaddingError";

export const { FunctionInternalPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionInternalPaddingError) => (
      <span>{data.raw}</span>
    )
  )
};
