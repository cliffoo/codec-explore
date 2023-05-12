import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { functionExternalNonStackPaddingErrorKinds } from "@/utils/type-guards/decoder-error/function-external-non-stack-padding-error";
import { functionExternalStackPaddingErrorKinds } from "@/utils/type-guards/decoder-error/function-external-stack-padding-error";

export const [isFunctionExternalError, functionExternalErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.FunctionExternalError>(
    ...functionExternalNonStackPaddingErrorKinds,
    ...functionExternalStackPaddingErrorKinds
  );
