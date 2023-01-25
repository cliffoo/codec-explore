import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isMalformedInternalFunctionError,
  malformedInternalFunctionErrorKinds
] = decoderErrorTypeGuardHelper<Format.Errors.MalformedInternalFunctionError>(
  "MalformedInternalFunctionError"
);
