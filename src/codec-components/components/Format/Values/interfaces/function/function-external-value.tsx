import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { FunctionExternalValueInfo } from "@/components/Format/Values/aliases/function/function-external-value-info";

const displayName = "FunctionExternalValue";

export const { FunctionExternalValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.FunctionExternalValue) => (
      <FunctionExternalValueInfo data={value} />
    )
  )
};
