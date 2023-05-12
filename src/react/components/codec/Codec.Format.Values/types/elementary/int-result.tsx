import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isIntValue } from "@/utils/type-guards/value-and-result/int";
import { IntValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/int-value";
import { IntErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/int-error-result";

const displayName = "IntResult";

export const { IntResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.IntResult) =>
      isIntValue(data) ? (
        <IntValue data={data} />
      ) : (
        <IntErrorResult data={data} />
      )
  )
};
