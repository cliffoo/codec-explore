import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "MagicError";

export const { MagicError } = {
  [displayName]: createPolymorphicComponent<Format.Errors.MagicError>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MagicError");
    }
  )
};
