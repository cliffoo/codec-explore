import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFunctionInternalValueInfoKnown } from "@/utils/type-guards/other/function-internal-value-info-known";
import { FunctionInternalValueInfoKnown } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-internal-value-info-known";
import { isFunctionInternalValueInfoException } from "@/utils/type-guards/other/function-internal-value-info-exception";
import { FunctionInternalValueInfoException } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-internal-value-info-exception";
import { FunctionInternalValueInfoUnknown } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-internal-value-info-unknown";

const displayName = "FunctionInternalValueInfo";

export const { FunctionInternalValueInfo } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FunctionInternalValueInfo) =>
      isFunctionInternalValueInfoKnown(data) ? (
        <FunctionInternalValueInfoKnown data={data} />
      ) : isFunctionInternalValueInfoException(data) ? (
        <FunctionInternalValueInfoException data={data} />
      ) : (
        <FunctionInternalValueInfoUnknown data={data} />
      )
  )
};
