import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionInternalValue } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalValue } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-internal-value";
import { FunctionInternalErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-internal-error-result";

export const { FunctionInternalResult } = createCodecComponent(
  "FunctionInternalResult",
  (data: Format.Values.FunctionInternalResult) =>
    isFunctionInternalValue(data) ? (
      <FunctionInternalValue data={data} />
    ) : (
      <FunctionInternalErrorResult data={data} />
    )
);
