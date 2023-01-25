import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isBoolOutOfRangeError, boolOutOfRangeErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.BoolOutOfRangeError>(
    "BoolOutOfRangeError"
  );
