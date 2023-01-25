import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { userDefinedTypeNotFoundErrorKinds } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { readErrorKinds } from "@/utils/type-guards/decoder-error/read-error";

export const [isErrorForThrowing, errorForThrowingKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ErrorForThrowing>(
    ...userDefinedTypeNotFoundErrorKinds,
    ...readErrorKinds
  );
