import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFunctionExternalNonStackPaddingError } from "@/utils/type-guards/decoder-error/function-external-non-stack-padding-error";
import { FunctionExternalNonStackPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-non-stack-padding-error";
import { FunctionExternalStackPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-stack-padding-error";

const displayName = "FunctionExternalError";

export const { FunctionExternalError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.FunctionExternalError) =>
      isFunctionExternalNonStackPaddingError(data) ? (
        <FunctionExternalNonStackPaddingError data={data} />
      ) : (
        <FunctionExternalStackPaddingError data={data} />
      )
  )
};
