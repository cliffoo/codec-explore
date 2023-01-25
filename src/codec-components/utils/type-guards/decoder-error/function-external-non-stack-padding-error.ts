import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isFunctionExternalNonStackPaddingError,
  functionExternalNonStackPaddingErrorKinds
] =
  decoderErrorTypeGuardHelper<Format.Errors.FunctionExternalNonStackPaddingError>(
    "FunctionExternalNonStackPaddingError"
  );