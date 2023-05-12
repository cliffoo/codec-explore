import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isMappingError } from "@/utils/type-guards/decoder-error/mapping-error";
import { MappingError } from "@/react/components/codec/Codec.Format.Errors/types/container/mapping-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

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
