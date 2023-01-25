import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

export const TupleError = createPolymorphicComponent(
  (data: Format.Errors.TupleError) => (
    <DynamicDataImplementationError data={data} />
  )
);
