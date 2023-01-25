import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isOverlargePointersNotImplementedError,
  overlargePointersNotImplementedErrorKinds
] =
  decoderErrorTypeGuardHelper<Format.Errors.OverlargePointersNotImplementedError>(
    "OverlargePointersNotImplementedError"
  );
