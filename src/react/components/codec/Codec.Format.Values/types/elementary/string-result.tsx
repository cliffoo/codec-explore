import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/string-value";
import { StringErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/string-error-result";

const displayName = "StringResult";

export const { StringResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.StringResult) =>
      isStringValue(data) ? (
        <StringValue data={data} />
      ) : (
        <StringErrorResult data={data} />
      )
  )
};
