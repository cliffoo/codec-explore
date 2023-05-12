import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isEnumOutOfRangeError, enumOutOfRangeErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.EnumOutOfRangeError>(
    "EnumOutOfRangeError"
  );
