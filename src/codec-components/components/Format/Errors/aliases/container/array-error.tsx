import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

const displayName = "ArrayError";

export const { ArrayError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ArrayError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
