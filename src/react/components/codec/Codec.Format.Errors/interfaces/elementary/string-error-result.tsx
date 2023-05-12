import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isStringError } from "@/utils/type-guards/decoder-error/string-error";
import { StringError } from "@/react/components/codec/Codec.Format.Errors/types/elementary/string-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "StringErrorResult";

export const { StringErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.StringErrorResult) =>
      isStringError(error) ? (
        <StringError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
