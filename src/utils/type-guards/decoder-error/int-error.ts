import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { intPaddingErrorKinds } from "@/utils/type-guards/decoder-error/int-padding-error";

export const [isIntError, intErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.IntError>(...intPaddingErrorKinds);
