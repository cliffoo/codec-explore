import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isEnumNotFoundDecodingError, enumNotFoundDecodingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.EnumNotFoundDecodingError>(
    "EnumNotFoundDecodingError"
  );
