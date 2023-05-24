import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "OptionsError";

export const { OptionsError } = {
  [displayName]: createCodecComponent<Format.Errors.OptionsError>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.OptionsError"
      );
    }
  )
};
