import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionExternalError } from "@/utils/type-guards/decoder-error/function-external-error";
import { FunctionExternalError } from "@/components/Format/Errors/aliases/function/function-external-error";
import { GenericError } from "@/components/Format/Errors/aliases/generic/generic-error";

export const FunctionExternalErrorResult = createPolymorphicComponent(
  ({ error }: Format.Errors.FunctionExternalErrorResult) =>
    isFunctionExternalError(error) ? (
      <FunctionExternalError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
