import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBytesDynamicError } from "@/utils/type-guards/decoder-error/bytes-dynamic-error";
import { BytesDynamicError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bytes-dynamic-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

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
