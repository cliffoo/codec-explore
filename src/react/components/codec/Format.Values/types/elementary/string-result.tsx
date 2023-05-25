import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStringValue } from "@/utils/type-guards/value-and-result/string";
import { StringValue } from "@/react/components/codec/Format.Values/interfaces/elementary/string-value";
import { StringErrorResult } from "@/react/components/codec/Format.Errors/interfaces/elementary/string-error-result";

export const { StringResult } = createCodecComponent(
  "StringResult",
  (data: Format.Values.StringResult) =>
    isStringValue(data) ? (
      <StringValue data={data} />
    ) : (
      <StringErrorResult data={data} />
    )
);
