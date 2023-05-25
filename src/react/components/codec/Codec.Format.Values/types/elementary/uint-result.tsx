import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isUintValue } from "@/utils/type-guards/value-and-result/uint";
import { UintValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/uint-value";
import { UintErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/uint-error-result";

export const { UintResult } = createCodecComponent(
  "UintResult",
  (data: Format.Values.UintResult) =>
    isUintValue(data) ? (
      <UintValue data={data} />
    ) : (
      <UintErrorResult data={data} />
    )
);
