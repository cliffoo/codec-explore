import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "NoSuchInternalFunctionError";

export const { NoSuchInternalFunctionError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.NoSuchInternalFunctionError) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
