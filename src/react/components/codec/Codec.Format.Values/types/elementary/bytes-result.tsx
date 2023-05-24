import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBytesStaticResult } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/bytes-static-result";
import { BytesDynamicResult } from "@/react/components/codec/Codec.Format.Values/types/elementary/bytes-dynamic-result";

const displayName = "BytesResult";

export const { BytesResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.BytesResult) =>
      isBytesStaticResult(data) ? (
        <BytesStaticResult data={data} />
      ) : (
        <BytesDynamicResult data={data} />
      )
  )
};
