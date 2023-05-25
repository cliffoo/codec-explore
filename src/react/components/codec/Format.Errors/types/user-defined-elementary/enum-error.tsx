import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isEnumOutOfRangeError } from "@/utils/type-guards/decoder-error/enum-out-of-range-error";
import { EnumOutOfRangeError } from "@/react/components/codec/Format.Errors/interfaces/user-defined-elementary/enum-out-of-range-error";
import { isEnumPaddingError } from "@/utils/type-guards/decoder-error/enum-padding-error";
import { EnumPaddingError } from "@/react/components/codec/Format.Errors/interfaces/elementary/enum-padding-error";
import { EnumNotFoundDecodingError } from "@/react/components/codec/Format.Errors/interfaces/user-defined-elementary/enum-not-found-decoding-error";

export const { EnumError } = createCodecComponent(
  "EnumError",
  (data: Format.Errors.EnumError) =>
    isEnumOutOfRangeError(data) ? (
      <EnumOutOfRangeError data={data} />
    ) : isEnumPaddingError(data) ? (
      <EnumPaddingError data={data} />
    ) : (
      <EnumNotFoundDecodingError data={data} />
    )
);