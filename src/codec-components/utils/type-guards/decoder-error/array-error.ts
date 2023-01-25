import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { dynamicDataImplementationErrorKinds } from "@/utils/type-guards/decoder-error/dynamic-data-implementation-error";

export const [isArrayError, arrayErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ArrayError>(
    ...dynamicDataImplementationErrorKinds
  );
