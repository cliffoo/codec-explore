import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const OptionsError = createPolymorphicComponent(
  (data: Format.Errors.OptionsError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.OptionsError");
  }
);
