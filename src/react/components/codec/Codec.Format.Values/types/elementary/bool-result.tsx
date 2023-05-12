import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBoolValue } from "@/utils/type-guards/value-and-result/bool";
import { BoolValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bool-value";
import { BoolErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bool-error-result";

const displayName = "BoolResult";

export const { BoolResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.BoolResult) =>
      isBoolValue(data) ? (
        <BoolValue data={data} />
      ) : (
        <BoolErrorResult data={data} />
      )
  )
};
