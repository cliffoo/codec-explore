import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isOverlongArraysAndStringsNotImplementedError,
  overlongArraysAndStringsNotImplementedErrorKinds
] =
  decoderErrorTypeGuardHelper<Format.Errors.OverlongArraysAndStringsNotImplementedError>(
    "OverlongArraysAndStringsNotImplementedError"
  );