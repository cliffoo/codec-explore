import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "MagicError";

export const { MagicError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.MagicError) => {
      throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MagicError");
    }
  )
};
