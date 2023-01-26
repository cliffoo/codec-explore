import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUserDefinedTypeNotFoundError } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { UserDefinedTypeNotFoundError } from "@/components/Format/Errors/interfaces/generic/user-defined-type-not-found-error";
import { ReadError } from "@/components/Format/Errors/aliases/generic/read-error";

const displayName = "ErrorForThrowing";

export const { ErrorForThrowing } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.ErrorForThrowing) =>
      isUserDefinedTypeNotFoundError(data) ? (
        <UserDefinedTypeNotFoundError data={data} />
      ) : (
        <ReadError data={data} />
      )
  )
};
