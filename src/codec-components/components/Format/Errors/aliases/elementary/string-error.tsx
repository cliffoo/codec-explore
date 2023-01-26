import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { DynamicDataImplementationError } from "@/components/Format/Errors/aliases/generic/dynamic-data-implementation-error";

const displayName = "StringError";

export const { StringError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.StringError) => (
      <DynamicDataImplementationError data={data} />
    )
  )
};
