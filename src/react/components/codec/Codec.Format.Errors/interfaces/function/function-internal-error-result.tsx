import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFunctionInternalError } from "@/utils/type-guards/decoder-error/function-internal-error";
import { FunctionInternalError } from "@/react/components/codec/Codec.Format.Errors/types/function/function-internal-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "FunctionInternalErrorResult";

export const { FunctionInternalErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.FunctionInternalErrorResult) =>
      isFunctionInternalError(error) ? (
        <FunctionInternalError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
