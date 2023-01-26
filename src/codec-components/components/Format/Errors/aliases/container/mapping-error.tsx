import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "MappingError";

export const { MappingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.MappingError) => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.MappingError"
      );
    }
  )
};
