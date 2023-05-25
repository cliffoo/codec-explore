import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionInternalError } from "@/utils/type-guards/decoder-error/function-internal-error";
import { FunctionInternalError } from "@/react/components/codec/Format.Errors/types/function/function-internal-error";
import { GenericError } from "@/react/components/codec/Format.Errors/types/generic/generic-error";

export const { FunctionInternalErrorResult } = createCodecComponent(
  "FunctionInternalErrorResult",
  ({ error }: Format.Errors.FunctionInternalErrorResult) =>
    isFunctionInternalError(error) ? (
      <FunctionInternalError data={error} />
    ) : (
      <GenericError data={error} />
    )
);
