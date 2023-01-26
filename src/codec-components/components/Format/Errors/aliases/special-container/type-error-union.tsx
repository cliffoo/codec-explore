import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { ComponentDataTypeIsNeverError } from "@/utils/custom-errors";

const displayName = "TypeErrorUnion";

export const { TypeErrorUnion } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.TypeErrorUnion) => {
      throw new ComponentDataTypeIsNeverError(
        "Codec.Format.Errors.TypeErrorUnion"
      );
    }
  )
};
