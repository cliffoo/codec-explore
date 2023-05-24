import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isMagicValue } from "@/utils/type-guards/value-and-result/magic";
import { MagicValue } from "@/react/components/codec/Codec.Format.Values/interfaces/special-container/magic-value";
import { MagicErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/special-container/magic-error-result";

const displayName = "MagicResult";

export const { MagicResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.MagicResult) =>
      isMagicValue(data) ? (
        <MagicValue data={data} />
      ) : (
        <MagicErrorResult data={data} />
      )
  )
};
