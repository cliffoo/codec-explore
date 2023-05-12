import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionExternalNonStackPaddingError";

export const { FunctionExternalNonStackPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalNonStackPaddingError) => (
      <span>{data.raw}</span>
    )
  )
};
