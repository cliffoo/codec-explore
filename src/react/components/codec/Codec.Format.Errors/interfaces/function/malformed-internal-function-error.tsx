import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "MalformedInternalFunctionError";

export const { MalformedInternalFunctionError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.MalformedInternalFunctionError) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
