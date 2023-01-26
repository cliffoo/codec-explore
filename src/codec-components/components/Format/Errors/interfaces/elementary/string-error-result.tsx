import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isStringError } from "@/utils/type-guards/decoder-error/string-error";
import { StringError } from "@/components/Format/Errors/aliases/elementary/string-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

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
