import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const FunctionInternalValueInfoUnknown = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalValueInfoUnknown) =>
    // TODO
    data.constructorProgramCounter.toString()
);
