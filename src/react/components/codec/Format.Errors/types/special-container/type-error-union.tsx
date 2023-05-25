import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const { TypeErrorUnion } = createCodecComponent(
  "TypeErrorUnion",
  (_data: Format.Errors.TypeErrorUnion) => {
    throw new ComponentDataTypeIsNeverError(
      "Codec.Format.Errors.TypeErrorUnion"
    );
  }
);
