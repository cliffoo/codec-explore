import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUserDefinedTypeNotFoundError } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { UserDefinedTypeNotFoundError } from "@/components/Format/Errors/interfaces/generic/user-defined-type-not-found-error";
import { ReadError } from "@/components/Format/Errors/aliases/generic/read-error";

export const ErrorForThrowing = createPolymorphicComponent(
  (data: Format.Errors.ErrorForThrowing) =>
    isUserDefinedTypeNotFoundError(data) ? (
      <UserDefinedTypeNotFoundError data={data} />
    ) : (
      <ReadError data={data} />
    )
);
