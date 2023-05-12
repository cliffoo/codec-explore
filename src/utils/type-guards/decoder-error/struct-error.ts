import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { dynamicDataImplementationErrorKinds } from "@/utils/type-guards/decoder-error/dynamic-data-implementation-error";

export const [isStructError, structErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.StructError>(
    ...dynamicDataImplementationErrorKinds
  );
