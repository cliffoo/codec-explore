import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isIndexedReferenceTypeError, indexedReferenceTypeErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.IndexedReferenceTypeError>(
    "IndexedReferenceTypeError"
  );
