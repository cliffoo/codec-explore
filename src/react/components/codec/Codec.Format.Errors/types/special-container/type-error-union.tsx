import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "TypeErrorUnion";

export const { TypeErrorUnion } = {
  [displayName]: createCodecComponent<Format.Errors.TypeErrorUnion>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.TypeErrorUnion"
      );
    }
  )
};
