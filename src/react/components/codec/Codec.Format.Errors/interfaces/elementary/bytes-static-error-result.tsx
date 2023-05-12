import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBytesStaticError } from "@/utils/type-guards/decoder-error/bytes-static-error";
import { BytesStaticError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/bytes-static-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "BytesStaticErrorResult";

export const { BytesStaticErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.BytesStaticErrorResult) =>
      isBytesStaticError(error) ? (
        <BytesStaticError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
