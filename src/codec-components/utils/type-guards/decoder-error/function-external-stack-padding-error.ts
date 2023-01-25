import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isFunctionExternalStackPaddingError,
  functionExternalStackPaddingErrorKinds
] =
  decoderErrorTypeGuardHelper<Format.Errors.FunctionExternalStackPaddingError>(
    "FunctionExternalStackPaddingError"
  );
