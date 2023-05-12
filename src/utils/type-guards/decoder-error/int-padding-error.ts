import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isIntPaddingError, intPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.IntPaddingError>("IntPaddingError");
