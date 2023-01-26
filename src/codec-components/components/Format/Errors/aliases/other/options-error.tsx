import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "OptionsError";

export const { OptionsError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.OptionsError) => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.OptionsError"
      );
    }
  )
};
