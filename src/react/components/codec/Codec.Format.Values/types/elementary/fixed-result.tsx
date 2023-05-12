import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isFixedValue } from "@/utils/type-guards/value-and-result/fixed";
import { FixedValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/fixed-value";
import { FixedErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/fixed-error-result";

const displayName = "FixedResult";

export const { FixedResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.FixedResult) =>
      isFixedValue(data) ? (
        <FixedValue data={data} />
      ) : (
        <FixedErrorResult data={data} />
      )
  )
};