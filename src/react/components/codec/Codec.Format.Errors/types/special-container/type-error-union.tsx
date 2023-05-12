import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "TypeErrorUnion";

export const { TypeErrorUnion } = {
  [displayName]: createPolymorphicComponent<Format.Errors.TypeErrorUnion>(
    displayName,
    () => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.TypeErrorUnion"
      );
    }
  )
};
