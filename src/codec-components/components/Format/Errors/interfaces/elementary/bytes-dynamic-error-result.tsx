import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesDynamicError } from "@/utils/type-guards/decoder-error/bytes-dynamic-error";
import { BytesDynamicError } from "@/components/Format/Errors/aliases/elementary/bytes-dynamic-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "BytesDynamicErrorResult";

export const { BytesDynamicErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.BytesDynamicErrorResult) =>
      isBytesDynamicError(error) ? (
        <BytesDynamicError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
