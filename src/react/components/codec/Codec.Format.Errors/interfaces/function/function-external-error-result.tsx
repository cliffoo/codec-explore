import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFunctionExternalError } from "@/utils/type-guards/decoder-error/function-external-error";
import { FunctionExternalError } from "@/react/components/codec/Codec.Format.Errors/types/function/function-external-error";
import { GenericError } from "@/react/components/codec/Codec.Format.Errors/types/generic/generic-error";

const displayName = "FunctionExternalErrorResult";

export const { FunctionExternalErrorResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ error }: Format.Errors.FunctionExternalErrorResult) =>
      isFunctionExternalError(error) ? (
        <FunctionExternalError data={error} />
      ) : (
        <GenericError data={error} />
      )
  )
};
