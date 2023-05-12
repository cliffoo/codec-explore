import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isUfixedPaddingError, ufixedPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UfixedPaddingError>(
    "UfixedPaddingError"
  );