import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isFixedPaddingError, fixedPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.FixedPaddingError>(
    "FixedPaddingError"
  );
