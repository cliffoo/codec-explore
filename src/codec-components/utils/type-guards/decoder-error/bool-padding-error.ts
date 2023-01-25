import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isBoolPaddingError, boolPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.BoolPaddingError>(
    "BoolPaddingError"
  );
