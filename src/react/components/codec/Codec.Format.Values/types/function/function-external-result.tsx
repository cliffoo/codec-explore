import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionExternalValue } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalValue } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-external-value";
import { FunctionExternalErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-error-result";

export const { FunctionExternalResult } = createCodecComponent(
  "FunctionExternalResult",
  (data: Format.Values.FunctionExternalResult) =>
    isFunctionExternalValue(data) ? (
      <FunctionExternalValue data={data} />
    ) : (
      <FunctionExternalErrorResult data={data} />
    )
);
