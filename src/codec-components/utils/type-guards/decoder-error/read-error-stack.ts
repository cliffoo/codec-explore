import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isReadErrorStack, readErrorStackKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ReadErrorStack>("ReadErrorStack");
