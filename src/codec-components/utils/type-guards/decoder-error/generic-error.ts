import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { userDefinedTypeNotFoundErrorKinds } from "@/utils/type-guards/decoder-error/user-defined-type-not-found-error";
import { indexedReferenceTypeErrorKinds } from "@/utils/type-guards/decoder-error/indexed-reference-type-error";
import { readErrorKinds } from "@/utils/type-guards/decoder-error/read-error";

export const [isGenericError, genericErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.GenericError>(
    ...userDefinedTypeNotFoundErrorKinds,
    ...indexedReferenceTypeErrorKinds,
    ...readErrorKinds
  );
