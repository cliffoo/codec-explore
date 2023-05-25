import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBytesStaticValue } from "@/utils/type-guards/value-and-result/bytes-static";
import { BytesStaticValue } from "@/react/components/codec/Format.Values/interfaces/elementary/bytes-static-value";
import { BytesDynamicValue } from "@/react/components/codec/Format.Values/interfaces/elementary/bytes-dynamic-value";

export const { BytesValue } = createCodecComponent(
  "BytesValue",
  (data: Format.Values.BytesValue) =>
    isBytesStaticValue(data) ? (
      <BytesStaticValue data={data} />
    ) : (
      <BytesDynamicValue data={data} />
    )
);
