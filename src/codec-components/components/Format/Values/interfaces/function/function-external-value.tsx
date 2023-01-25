import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { FunctionExternalValueInfo } from "@/components/Format/Values/aliases/function/function-external-value-info";

export const FunctionExternalValue = createPolymorphicComponent(
  ({ value }: Format.Values.FunctionExternalValue) => (
    <FunctionExternalValueInfo data={value} />
  )
);
