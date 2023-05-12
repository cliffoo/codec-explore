import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { dynamicDataImplementationErrorKinds } from "@/utils/type-guards/decoder-error/dynamic-data-implementation-error";

export const [isStringError, stringErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.StringError>(
    ...dynamicDataImplementationErrorKinds
  );
