import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isEnumOutOfRangeError } from "@/utils/type-guards/decoder-error/enum-out-of-range-error";
import { EnumOutOfRangeError } from "@/components/Format/Errors/interfaces/user-defined-elementary/enum-out-of-range-error";
import { isEnumPaddingError } from "@/utils/type-guards/decoder-error/enum-padding-error";
import { EnumPaddingError } from "@/components/Format/Errors/interfaces/elementary/enum-padding-error";
import { EnumNotFoundDecodingError } from "@/components/Format/Errors/interfaces/user-defined-elementary/enum-not-found-decoding-error";

const displayName = "EnumError";

export const { EnumError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.EnumError) =>
      isEnumOutOfRangeError(data) ? (
        <EnumOutOfRangeError data={data} />
      ) : isEnumPaddingError(data) ? (
        <EnumPaddingError data={data} />
      ) : (
        <EnumNotFoundDecodingError data={data} />
      )
  )
};
