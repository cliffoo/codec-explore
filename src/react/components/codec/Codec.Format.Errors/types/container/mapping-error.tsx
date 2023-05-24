import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "MappingError";

export const { MappingError } = {
  [displayName]: createCodecComponent<Format.Errors.MappingError>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.MappingError"
      );
    }
  )
};
