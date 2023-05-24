import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isArrayValue } from "@/utils/type-guards/value-and-result/array";
import { ArrayValue } from "@/react/components/codec/Codec.Format.Values/interfaces/container/array-value";
import { ArrayErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/container/array-error-result";

const displayName = "ArrayResult";

export const { ArrayResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.ArrayResult) =>
      isArrayValue(data) ? (
        <ArrayValue data={data} />
      ) : (
        <ArrayErrorResult data={data} />
      )
  )
};
