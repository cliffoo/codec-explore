import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBytesDynamicValue } from "@/utils/type-guards/value-and-result/bytes-dynamic";
import { BytesDynamicValue } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/bytes-dynamic-value";
import { BytesDynamicErrorResult } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bytes-dynamic-error-result";

const displayName = "BytesDynamicResult";

export const { BytesDynamicResult } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Values.BytesDynamicResult) =>
      isBytesDynamicValue(data) ? (
        <BytesDynamicValue data={data} />
      ) : (
        <BytesDynamicErrorResult data={data} />
      )
  )
};
