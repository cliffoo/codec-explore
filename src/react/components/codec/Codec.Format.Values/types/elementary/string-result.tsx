import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/string-value";
import { StringErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/string-error-result";

const displayName = "StringResult";

export const { StringResult } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Values.StringResult) =>
      isStringValue(data) ? (
        <StringValue data={data} />
      ) : (
        <StringErrorResult data={data} />
      )
  )
};
