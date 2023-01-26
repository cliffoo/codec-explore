import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isMappingError } from "@/utils/type-guards/decoder-error/mapping-error";
import { MappingError } from "@/components/Format/Errors/aliases/container/mapping-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "MappingErrorResult";

export const { MappingErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.MappingErrorResult) =>
      isMappingError(error) ? (
        <MappingError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
