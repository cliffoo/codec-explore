import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

export const ArrayError = createPolymorphicComponent(
  (data: Format.Errors.ArrayError) => (
    <DynamicDataImplementationError data={data} />
  )
);
