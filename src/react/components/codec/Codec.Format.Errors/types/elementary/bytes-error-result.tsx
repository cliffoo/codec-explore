import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBytesStaticErrorResult } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-static-error-result";
import { BytesDynamicErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-dynamic-error-result";

export const { BytesErrorResult } = createCodecComponent(
  "BytesErrorResult",
  (data: Format.Errors.BytesErrorResult) =>
    isBytesStaticErrorResult(data) ? (
      <BytesStaticErrorResult data={data} />
    ) : (
      <BytesDynamicErrorResult data={data} />
    )
);
