import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionInternalValueInfoKnown } from "@/utils/type-guards/other/function-internal-value-info-known";
import { FunctionInternalValueInfoKnown } from "@/components/Format/Values/interfaces/function/function-internal-value-info-known";
import { isFunctionInternalValueInfoException } from "@/utils/type-guards/other/function-internal-value-info-exception";
import { FunctionInternalValueInfoException } from "@/components/Format/Values/interfaces/function/function-internal-value-info-exception";
import { FunctionInternalValueInfoUnknown } from "@/components/Format/Values/interfaces/function/function-internal-value-info-unknown";

export const FunctionInternalValueInfo = createPolymorphicComponent(
  (data: Format.Values.FunctionInternalValueInfo) =>
    isFunctionInternalValueInfoKnown(data) ? (
      <FunctionInternalValueInfoKnown data={data} />
    ) : isFunctionInternalValueInfoException(data) ? (
      <FunctionInternalValueInfoException data={data} />
    ) : (
      <FunctionInternalValueInfoUnknown data={data} />
    )
);
