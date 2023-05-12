import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isEnumPaddingError, enumPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.EnumPaddingError>(
    "EnumPaddingError"
  );
