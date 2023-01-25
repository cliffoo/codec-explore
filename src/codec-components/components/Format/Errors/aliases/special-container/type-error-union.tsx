import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

export const TypeErrorUnion = createPolymorphicComponent(
  (data: Format.Errors.TypeErrorUnion) => {
    throw new ComponentDataTypeIsNeverError(
      "Codec.Format.Errors.TypeErrorUnion"
    );
  }
);
