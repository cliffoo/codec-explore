import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isUnusedImmutableError, unusedImmutableErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UnusedImmutableError>(
    "UnusedImmutableError"
  );
