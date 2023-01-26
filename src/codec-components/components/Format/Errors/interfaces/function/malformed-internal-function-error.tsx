import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "MalformedInternalFunctionError";

export const { MalformedInternalFunctionError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.MalformedInternalFunctionError) =>
      // TODO
      data.constructorProgramCounter.toString()
  )
};
