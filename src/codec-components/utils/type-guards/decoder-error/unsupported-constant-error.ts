import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isUnsupportedConstantError, unsupportedConstantErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UnsupportedConstantError>(
    "UnsupportedConstantError"
  );
