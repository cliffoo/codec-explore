import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

const displayName = "TupleError";

export const { TupleError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.TupleError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
