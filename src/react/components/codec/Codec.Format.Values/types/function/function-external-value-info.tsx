import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFunctionExternalValueInfoKnown } from "@/utils/type-guards/other/function-external-value-info-known";
import { FunctionExternalValueInfoKnown } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-external-value-info-known";
import { isFunctionExternalValueInfoInvalid } from "@/utils/type-guards/other/function-external-value-info-invalid";
import { FunctionExternalValueInfoInvalid } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-external-value-info-invalid";
import { FunctionExternalValueInfoUnknown } from "@/react/components/codec/Codec.Format.Values/interfaces/function/function-external-value-info-unknown";

const displayName = "FunctionExternalValueInfo";

export const { FunctionExternalValueInfo } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.FunctionExternalValueInfo) =>
      isFunctionExternalValueInfoKnown(data) ? (
        <FunctionExternalValueInfoKnown data={data} />
      ) : isFunctionExternalValueInfoInvalid(data) ? (
        <FunctionExternalValueInfoInvalid data={data} />
      ) : (
        <FunctionExternalValueInfoUnknown data={data} />
      )
  )
};
