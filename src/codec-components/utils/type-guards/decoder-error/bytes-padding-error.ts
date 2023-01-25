import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isBytesPaddingError, bytesPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.BytesPaddingError>(
    "BytesPaddingError"
  );
