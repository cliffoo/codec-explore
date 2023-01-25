import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isInternalFunctionInABIError, internalFunctionInABIErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.InternalFunctionInABIError>(
    "InternalFunctionInABIError"
  );
