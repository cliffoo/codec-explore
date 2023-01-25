import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isOverlongArrayOrStringStrictModeError,
  overlongArrayOrStringStrictModeErrorKinds
] =
  decoderErrorTypeGuardHelper<Format.Errors.OverlongArrayOrStringStrictModeError>(
    "OverlongArrayOrStringStrictModeError"
  );
