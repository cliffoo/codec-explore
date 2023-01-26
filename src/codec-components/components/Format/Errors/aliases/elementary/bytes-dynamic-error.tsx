import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

const displayName = "BytesDynamicError";

export const { BytesDynamicError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.BytesDynamicError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
