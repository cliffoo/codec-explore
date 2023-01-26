import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "NoSuchInternalFunctionError";

export const { NoSuchInternalFunctionError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.NoSuchInternalFunctionError) =>
      // TODO
      data.constructorProgramCounter.toString()
  )
};
