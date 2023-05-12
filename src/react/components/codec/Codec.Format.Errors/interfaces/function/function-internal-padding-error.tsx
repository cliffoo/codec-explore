import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionInternalPaddingError";

export const { FunctionInternalPaddingError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.FunctionInternalPaddingError) => (
      <span>{data.raw}</span>
    )
  )
};
