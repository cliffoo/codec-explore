import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isNoSuchInternalFunctionError, noSuchInternalFunctionErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.NoSuchInternalFunctionError>(
    "NoSuchInternalFunctionError"
  );
