import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "FunctionInternalValueInfoException";

export const { FunctionInternalValueInfoException } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfoException) =>
      // TODO
      data.constructorProgramCounter.toString()
  )
};
