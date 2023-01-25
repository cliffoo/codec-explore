import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isUintPaddingError, uintPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UintPaddingError>(
    "UintPaddingError"
  );
