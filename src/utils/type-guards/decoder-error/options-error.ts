import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isOptionsError, optionsErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.OptionsError>();