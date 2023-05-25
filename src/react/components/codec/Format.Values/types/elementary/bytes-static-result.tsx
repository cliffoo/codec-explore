import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/react/components/codec/Format.Values/interfaces/elementary/bytes-static-value";
import { BytesStaticErrorResult } from "@/react/components/codec/Format.Errors/interfaces/elementary/bytes-static-error-result";

export const { BytesStaticResult } = createCodecComponent(
  "BytesStaticResult",
  (data: Format.Values.BytesStaticResult) =>
    isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : (
      <BytesStaticErrorResult data={data} />
    )
);
