import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isStringValueInfoValid } from "@/utils/type-guards/other/string-value-info-valid";
import { StringValueInfoValid } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/string-value-info-valid";
import { StringValueInfoMalformed } from "@/react/components/codec/Codec.Format.Values/interfaces/elementary/string-value-info-malformed";

export const { StringValueInfo } = createCodecComponent(
  "StringValueInfo",
  (data: Format.Values.StringValueInfo) =>
    isStringValueInfoValid(data) ? (
      <StringValueInfoValid data={data} />
    ) : (
      <StringValueInfoMalformed data={data} />
    )
);
