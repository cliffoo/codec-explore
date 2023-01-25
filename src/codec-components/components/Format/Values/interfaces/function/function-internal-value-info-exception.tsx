import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionInternalValueInfoException = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalValueInfoException) =>
    // TODO
    data.constructorProgramCounter.toString()
);
