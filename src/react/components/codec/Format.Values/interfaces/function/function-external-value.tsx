import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { FunctionExternalValueInfo } from "@/react/components/codec/Format.Values/types/function/function-external-value-info";

export const { FunctionExternalValue } = createCodecComponent(
  "FunctionExternalValue",
  ({ value }: Format.Values.FunctionExternalValue) => (
    <FunctionExternalValueInfo data={value} />
  )
);
