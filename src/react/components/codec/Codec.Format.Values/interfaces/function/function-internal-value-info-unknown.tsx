import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";

const displayName = "FunctionInternalValueInfoUnknown";

export const { FunctionInternalValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoUnknown) => (
      // TODO
      <span>{data.constructorProgramCounter.toString()}</span>
    )
  )
};
