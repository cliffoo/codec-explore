import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isMagicValue } from "@/utils/type-guards/value-and-result/magic";
import { MagicValue } from "@/react/components/codec/Format.Values/interfaces/special-container/magic-value";
import { MagicErrorResult } from "@/react/components/codec/Format.Errors/interfaces/special-container/magic-error-result";

export const { MagicResult } = createCodecComponent(
  "MagicResult",
  (data: Format.Values.MagicResult) =>
    isMagicValue(data) ? (
      <MagicValue data={data} />
    ) : (
      <MagicErrorResult data={data} />
    )
);
