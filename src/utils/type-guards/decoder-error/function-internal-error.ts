import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { functionInternalPaddingErrorKinds } from "@/utils/type-guards/decoder-error/function-internal-padding-error";
import { noSuchInternalFunctionErrorKinds } from "@/utils/type-guards/decoder-error/no-such-internal-function-error";
import { deployedFunctionInConstructorErrorKinds } from "@/utils/type-guards/decoder-error/deployed-function-in-constructor-error";
import { malformedInternalFunctionErrorKinds } from "@/utils/type-guards/decoder-error/malformed-internal-function-error";

export const [isFunctionInternalError, functionInternalErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.FunctionInternalError>(
    ...functionInternalPaddingErrorKinds,
    ...noSuchInternalFunctionErrorKinds,
    ...deployedFunctionInConstructorErrorKinds,
    ...malformedInternalFunctionErrorKinds
  );
