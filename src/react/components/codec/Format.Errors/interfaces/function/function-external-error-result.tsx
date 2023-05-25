import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionExternalError } from "@/utils/type-guards/decoder-error/function-external-error";
import { FunctionExternalError } from "@/react/components/codec/Format.Errors/types/function/function-external-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { FunctionExternalErrorResult } = createCodecComponent(
  "FunctionExternalErrorResult",
  ({ error }: Format.Errors.FunctionExternalErrorResult) =>
    isFunctionExternalError(error) ? (
      <FunctionExternalError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
