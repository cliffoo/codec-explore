import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionInternalValueInfoKnown } from "@/utils/type-guards/other/function-internal-value-info-known";
import { FunctionInternalValueInfoKnown } from "@/react/components/codec/Format.Values/interfaces/function/function-internal-value-info-known";
import { isFunctionInternalValueInfoException } from "@/utils/type-guards/other/function-internal-value-info-exception";
import { FunctionInternalValueInfoException } from "@/react/components/codec/Format.Values/interfaces/function/function-internal-value-info-exception";
import { FunctionInternalValueInfoUnknown } from "@/react/components/codec/Format.Values/interfaces/function/function-internal-value-info-unknown";

export const { FunctionInternalValueInfo } = createCodecComponent(
  "FunctionInternalValueInfo",
  (data: Format.Values.FunctionInternalValueInfo) =>
    isFunctionInternalValueInfoKnown(data) ? (
      <FunctionInternalValueInfoKnown data={data} />
    ) : isFunctionInternalValueInfoException(data) ? (
      <FunctionInternalValueInfoException data={data} />
    ) : (
      <FunctionInternalValueInfoUnknown data={data} />
    )
);
