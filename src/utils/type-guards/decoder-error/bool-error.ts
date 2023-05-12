import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { boolOutOfRangeErrorKinds } from "@/utils/type-guards/decoder-error/bool-out-of-range-error";
import { boolPaddingErrorKinds } from "@/utils/type-guards/decoder-error/bool-padding-error";

export const [isBoolError, boolErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.BoolError>(
    ...boolOutOfRangeErrorKinds,
    ...boolPaddingErrorKinds
  );
