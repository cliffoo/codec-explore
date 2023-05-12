import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "MappingError";

export const { MappingError } = {
  [displayName]: createPolymorphicComponent<Format.Errors.MappingError>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.MappingError"
      );
    }
  )
};
