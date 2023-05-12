import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { wrappedErrorKinds } from "@/utils/type-guards/decoder-error/wrapped-error";

export const [isUserDefinedValueTypeError, userDefinedValueTypeErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.UserDefinedValueTypeError>(
    ...wrappedErrorKinds
  );
