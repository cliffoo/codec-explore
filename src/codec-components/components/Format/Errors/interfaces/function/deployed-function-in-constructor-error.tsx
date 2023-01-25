import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const DeployedFunctionInConstructorError = createPolymorphicComponent(
  (data: Format.Errors.DeployedFunctionInConstructorError) =>
    // TODO
    data.constructorProgramCounter.toString()
);
