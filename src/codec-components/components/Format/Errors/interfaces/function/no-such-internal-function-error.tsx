import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const NoSuchInternalFunctionError = createPolymorphicComponent(
  (data: Format.Errors.NoSuchInternalFunctionError) =>
    // TODO
    data.constructorProgramCounter.toString()
);
