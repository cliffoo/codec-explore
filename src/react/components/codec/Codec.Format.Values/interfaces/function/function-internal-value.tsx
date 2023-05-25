import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { FunctionInternalValueInfo } from "@/react/components/codec/Codec.Format.Values/types/function/function-internal-value-info";

export const { FunctionInternalValue } = createCodecComponent(
  "FunctionInternalValue",
  ({ value }: Format.Values.FunctionInternalValue) => (
    <FunctionInternalValueInfo data={value} />
  )
);
