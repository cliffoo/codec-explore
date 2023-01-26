import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isUserDefinedValueTypeError } from "@/utils/type-guards/decoder-error/user-defined-value-type-error";
import { UserDefinedValueTypeError } from "@/components/Format/Errors/aliases/user-defined-elementary/user-defined-value-type-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

const displayName = "UserDefinedValueTypeErrorResult";

export const { UserDefinedValueTypeErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.UserDefinedValueTypeErrorResult) =>
      isUserDefinedValueTypeError(error) ? (
        <UserDefinedValueTypeError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
