import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { FunctionExternalValueInfo } from "@/react/components/codec/Codec.Format.Values/types/function/function-external-value-info";

const displayName = "FunctionExternalValue";

export const { FunctionExternalValue } = {
  [displayName]: createCodecComponent(
    displayName,
    ({ value }: Format.Values.FunctionExternalValue) => (
      <FunctionExternalValueInfo data={value} />
    )
  )
};
