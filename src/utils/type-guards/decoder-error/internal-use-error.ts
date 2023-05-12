import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { overlongArrayOrStringStrictModeErrorKinds } from "@/utils/type-guards/decoder-error/overlong-array-or-string-strict-mode-error";
import { internalFunctionInABIErrorKinds } from "@/utils/type-guards/decoder-error/internal-function-in-abi-error";

export const [isInternalUseError, internalUseErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.InternalUseError>(
    ...overlongArrayOrStringStrictModeErrorKinds,
    ...internalFunctionInABIErrorKinds
  );
