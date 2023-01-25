import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

export const StructError = createPolymorphicComponent(
  (data: Format.Errors.StructError) => (
    <DynamicDataImplementationError data={data} />
  )
);
