import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionInternalValueInfoException";

export const { FunctionInternalValueInfoException } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoException) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
