import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionInternalValue } from "@/utils/type-guards/value-and-result/function-internal";
import { FunctionInternalValue } from "@/components/Format/Values/interfaces/function/function-internal-value";
import { FunctionInternalErrorResult } from "@/components/Format/Errors/interfaces/function/function-internal-error-result";

export const FunctionInternalResult = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalResult) =>
    isFunctionInternalValue(data) ? (
      <FunctionInternalValue data={data} />
    ) : (
      <FunctionInternalErrorResult data={data} />
    )
);
