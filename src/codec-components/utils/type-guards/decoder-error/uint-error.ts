import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { uintPaddingErrorKinds } from "@/utils/type-guards/decoder-error/uint-padding-error";

export const [isUintError, uintErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UintError>(
    ...uintPaddingErrorKinds
  );
