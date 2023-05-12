import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFunctionInternalValue } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalValue } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-internal-value";
import { FunctionInternalErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-internal-error-result";

const displayName = "FunctionInternalResult";

export const { FunctionInternalResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalResult) =>
      isFunctionInternalValue(data) ? (
        <FunctionInternalValue data={data} />
      ) : (
        <FunctionInternalErrorResult data={data} />
      )
  )
};
