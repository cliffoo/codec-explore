import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

export const BytesDynamicError = createPolymorphicComponent(
  (data: Format.Errors.BytesDynamicError) => (
    <DynamicDataImplementationError data={data} />
  )
);
