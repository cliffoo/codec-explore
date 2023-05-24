import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "MagicError";

export const { MagicError } = {
  [displayName]: createCodecComponent<Format.Errors.MagicError>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MagicError");
    }
  )
};
