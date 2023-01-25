import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { dynamicDataImplementationErrorKinds } from "@/utils/type-guards/decoder-error/dynamic-data-implementation-error";

export const [isBytesDynamicError, bytesDynamicErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.BytesDynamicError>(
    ...dynamicDataImplementationErrorKinds
  );
