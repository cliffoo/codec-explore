import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isStringError } from "@/utils/type-guards/decoder-error/string-error";
import { StringError } from "@/components/Format/Errors/aliases/elementary/string-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const StringErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.StringErrorResult) =>
    isStringError(error) ? (
      <StringError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
