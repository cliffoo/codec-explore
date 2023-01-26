import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

const displayName = "StructError";

export const { StructError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.StructError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
