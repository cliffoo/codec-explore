import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const { MagicError } = createCodecComponent(
  "MagicError",
  (_data: Format.Errors.MagicError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MagicError");
  }
);
