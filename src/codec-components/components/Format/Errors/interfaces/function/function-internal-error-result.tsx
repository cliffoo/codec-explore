import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionInternalError } from "@/utils/type-guards/decoder-error/function-internal-error";
import { FunctionInternalError } from "@/components/Format/Errors/aliases/function/function-internal-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const FunctionInternalErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.FunctionInternalErrorResult) =>
    isFunctionInternalError(error) ? (
      <FunctionInternalError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
