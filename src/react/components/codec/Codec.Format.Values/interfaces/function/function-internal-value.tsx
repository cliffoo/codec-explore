import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { FunctionInternalValueInfo } from "@/react/components/codec/Codec.Format.Values/types/function/function-internal-value-info";

const displayName = "FunctionInternalValue";

export const { FunctionInternalValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.FunctionInternalValue) => (
      <FunctionInternalValueInfo data={value} />
    )
  )
};
