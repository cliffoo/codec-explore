import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const MagicError = createPolymorphicComponent(
  (data: Format.Errors.MagicError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MagicError");
  }
);
