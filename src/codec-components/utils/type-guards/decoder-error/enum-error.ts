import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { enumOutOfRangeErrorKinds } from "@/utils/type-guards/decoder-error/enum-out-of-range-error";
import { enumPaddingErrorKinds } from "@/utils/type-guards/decoder-error/enum-padding-error";
import { enumNotFoundDecodingErrorKinds } from "@/utils/type-guards/decoder-error/enum-not-found-decoding-error";

export const [isEnumError, EnumErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.EnumError>(
    ...enumOutOfRangeErrorKinds,
    ...enumPaddingErrorKinds,
    ...enumNotFoundDecodingErrorKinds
  );
