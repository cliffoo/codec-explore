import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { FunctionInternalValueInfo } from "@/components/Format/Values/aliases/function/function-internal-value-info";

const displayName = "FunctionInternalValue";

export const { FunctionInternalValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.FunctionInternalValue) => (
      <FunctionInternalValueInfo data={value} />
    )
  )
};
