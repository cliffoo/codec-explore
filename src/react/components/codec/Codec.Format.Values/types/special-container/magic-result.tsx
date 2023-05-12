import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isMagicValue } from "@/utils/type-guards/value-and-result/magic";
import { MagicValue } from "@/react/components/codec/Codec.Format.Values/interfaces/special-container/magic-value";
import { MagicErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/special-container/magic-error-result";

const displayName = "MagicResult";

export const { MagicResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.MagicResult) =>
      isMagicValue(data) ? (
        <MagicValue data={data} />
      ) : (
        <MagicErrorResult data={data} />
      )
  )
};
