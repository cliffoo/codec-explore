import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBoolValue } from "@/utils/type-guards/value-and-result/bool";
import { BoolValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bool-value";
import { BoolErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bool-error-result";

export const { BoolResult } = createCodecComponent(
  "BoolResult",
  (data: Format.Values.BoolResult) =>
    isBoolValue(data) ? (
      <BoolValue data={data} />
    ) : (
      <BoolErrorResult data={data} />
    )
);
