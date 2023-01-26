import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isBytesStaticError } from "@/utils/type-guards/decoder-error/bytes-static-error";
import { BytesStaticError } from "@/components/Format/Errors/aliases/elementary/bytes-static-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

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
