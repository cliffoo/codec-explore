import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isWrappedError, wrappedErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.WrappedError>("WrappedError");
