import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { bytesPaddingErrorKinds } from "@/utils/type-guards/decoder-error/bytes-padding-error";

export const [isBytesStaticError, bytesStaticErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.BytesStaticError>(
    ...bytesPaddingErrorKinds
  );
