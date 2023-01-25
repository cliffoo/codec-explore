import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const MappingError = createPolymorphicComponent(
  (data: Format.Errors.MappingError) => {
    throw new ComponentDataTypeIsNeverError("Codec.Format.Errors.MappingError");
  }
);
