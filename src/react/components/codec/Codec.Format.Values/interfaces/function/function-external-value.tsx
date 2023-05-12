import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { FunctionExternalValueInfo } from "@/react/components/codec/Codec.Format.Values/types/function/function-external-value-info";

const displayName = "FunctionExternalValue";

export const { FunctionExternalValue } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    ({ value }: Format.Values.FunctionExternalValue) => (
      <FunctionExternalValueInfo data={value} />
    )
  )
};
