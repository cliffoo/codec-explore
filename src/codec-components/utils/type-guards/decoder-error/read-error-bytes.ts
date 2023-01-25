import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isReadErrorBytes, readErrorBytesKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ReadErrorBytes>("ReadErrorBytes");
