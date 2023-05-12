import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "InternalFunctionInABIError";

export const { InternalFunctionInABIError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    // TODO
    (data: Format.Errors.InternalFunctionInABIError) => <span>{data.kind}</span>
  )
};
