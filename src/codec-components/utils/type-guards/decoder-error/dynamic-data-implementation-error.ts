import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { overlongArraysAndStringsNotImplementedErrorKinds } from "@/utils/type-guards/decoder-error/overlong-arrays-and-strings-not-implemented-error";
import { overlargePointersNotImplementedErrorKinds } from "@/utils/type-guards/decoder-error/overlarge-pointers-not-implemented-error";

export const [
  isDynamicDataImplementationError,
  dynamicDataImplementationErrorKinds
] = decoderErrorTypeGuardHelper<Format.Errors.DynamicDataImplementationError>(
  ...overlongArraysAndStringsNotImplementedErrorKinds,
  ...overlargePointersNotImplementedErrorKinds
);
