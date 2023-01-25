import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const MalformedInternalFunctionError = createPolymorphicComponent(
  (data: Format.Errors.MalformedInternalFunctionError) =>
    // TODO
    data.constructorProgramCounter.toString()
);
