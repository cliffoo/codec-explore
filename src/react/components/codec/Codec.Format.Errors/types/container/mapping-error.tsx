import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const { MappingError } = createCodecComponent(
  "MappingError",
  (_data: Format.Errors.MappingError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MappingError");
  }
);
