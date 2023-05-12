import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFunctionExternalValue } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalValue } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-external-value";
import { FunctionExternalErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/function/function-external-error-result";

const displayName = "FunctionExternalResult";

export const { FunctionExternalResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionExternalResult) =>
      isFunctionExternalValue(data) ? (
        <FunctionExternalValue data={data} />
      ) : (
        <FunctionExternalErrorResult data={data} />
      )
  )
};
