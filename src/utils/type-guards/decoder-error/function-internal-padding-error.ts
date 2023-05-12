import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isFunctionInternalPaddingError,
  functionInternalPaddingErrorKinds
] = decoderErrorTypeGuardHelper<Format.Errors.FunctionInternalPaddingError>(
  "FunctionInternalPaddingError"
);
