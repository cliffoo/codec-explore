import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/fixed-value";
import { FixedErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/fixed-error-result";

const displayName = "FixedResult";

export const { FixedResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.FixedResult) =>
      isFixedValue(data) ? (
        <FixedValue data={data} />
      ) : (
        <FixedErrorResult data={data} />
      )
  )
};
