import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "BoolPaddingError";

export const { BoolPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolPaddingError) => <span>{data.raw}</span>
  )
};
