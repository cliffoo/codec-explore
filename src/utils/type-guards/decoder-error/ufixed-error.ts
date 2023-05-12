import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { ufixedPaddingErrorKinds } from "@/utils/type-guards/decoder-error/ufixed-padding-error";

export const [isUfixedError, ufixedErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UfixedError>(
    ...ufixedPaddingErrorKinds
  );
