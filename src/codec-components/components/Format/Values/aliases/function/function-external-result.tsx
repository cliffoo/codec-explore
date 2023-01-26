import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionExternalValue } from "@/utils/type-guards/value-and-result/function-external";
import { FunctionExternalValue } from "@/components/Format/Values/interfaces/function/function-external-value";
import { FunctionExternalErrorResult } from "@/components/Format/Errors/interfaces/function/function-external-error-result";

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
