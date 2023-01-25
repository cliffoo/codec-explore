import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";

export const InternalFunctionInABIError = createPolymorphicComponent(
  // TODO
  (data: Format.Errors.InternalFunctionInABIError) => data.kind
);
