import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

export const StringError = createPolymorphicComponent(
  (data: Format.Errors.StringError) => (
    <DynamicDataImplementationError data={data} />
  )
);
