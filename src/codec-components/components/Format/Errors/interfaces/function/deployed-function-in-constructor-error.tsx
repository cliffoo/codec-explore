import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

const displayName = "DeployedFunctionInConstructorError";

export const { DeployedFunctionInConstructorError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.DeployedFunctionInConstructorError) =>
      // TODO
      data.constructorProgramCounter.toString()
  )
};
