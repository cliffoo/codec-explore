import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "OptionsError";

export const { OptionsError } = {
  [displayName]: createPolymorphicComponent<Format.Errors.OptionsError>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.OptionsError"
      );
    }
  )
};
