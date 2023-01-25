import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isMagicError, magicErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.MagicError>();
