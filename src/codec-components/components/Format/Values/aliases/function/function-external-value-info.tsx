import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionExternalValueInfoKnown } from "@/utils/type-guards/other/function-external-value-info-known";
import { FunctionExternalValueInfoKnown } from "@/components/Format/Values/interfaces/function/function-external-value-info-known";
import { isFunctionExternalValueInfoInvalid } from "@/utils/type-guards/other/function-external-value-info-invalid";
import { FunctionExternalValueInfoInvalid } from "@/components/Format/Values/interfaces/function/function-external-value-info-invalid";
import { FunctionExternalValueInfoUnknown } from "@/components/Format/Values/interfaces/function/function-external-value-info-unknown";

export const FunctionExternalValueInfo = createPolymorphicComponent(
  (data: Format.Values.FunctionExternalValueInfo) =>
    isFunctionExternalValueInfoKnown(data) ? (
      <FunctionExternalValueInfoKnown data={data} />
    ) : isFunctionExternalValueInfoInvalid(data) ? (
      <FunctionExternalValueInfoInvalid data={data} />
    ) : (
      <FunctionExternalValueInfoUnknown data={data} />
    )
);
