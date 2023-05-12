import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionExternalStackPaddingError";

export const { FunctionExternalStackPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionExternalStackPaddingError) => (
      <span>{data.rawAddress}</span>
    )
  )
};
