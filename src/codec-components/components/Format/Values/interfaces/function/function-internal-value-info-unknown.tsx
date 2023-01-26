import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionInternalValueInfoUnknown";

export const { FunctionInternalValueInfoUnknown } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoUnknown) =>
      // TODO
      data.constructorProgramCounter.toString()
  )
};
