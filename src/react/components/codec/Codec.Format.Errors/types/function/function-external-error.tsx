import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionExternalNonStackPaddingError } from "@/utils/type-guards/decoder-error/function-external-non-stack-padding-error";
import { FunctionExternalNonStackPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-non-stack-padding-error";
import { FunctionExternalStackPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-stack-padding-error";

export const { FunctionExternalError } = createCodecComponent(
  "FunctionExternalError",
  (data: Format.Errors.FunctionExternalError) =>
    isFunctionExternalNonStackPaddingError(data) ? (
      <FunctionExternalNonStackPaddingError data={data} />
    ) : (
      <FunctionExternalStackPaddingError data={data} />
    )
);
