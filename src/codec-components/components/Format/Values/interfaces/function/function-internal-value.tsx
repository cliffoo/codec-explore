import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { FunctionInternalValueInfo } from "@/components/Format/Values/aliases/function/function-internal-value-info";

export const FunctionInternalValue = createPolymorphicComponent(
  ({ value }: Format.Values.FunctionInternalValue) => (
    <FunctionInternalValueInfo data={value} />
  )
);
