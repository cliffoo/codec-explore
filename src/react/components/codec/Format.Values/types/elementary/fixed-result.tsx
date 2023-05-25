import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/react/components/codec/Format.Values/interfaces/elementary/fixed-value";
import { FixedErrorResult } from "@/react/components/codec/Format.Errors/interfaces/elementary/fixed-error-result";

export const { FixedResult } = createCodecComponent(
  "FixedResult",
  (data: Format.Values.FixedResult) =>
    isFixedValue(data) ? (
      <FixedValue data={data} />
    ) : (
      <FixedErrorResult data={data} />
    )
);
