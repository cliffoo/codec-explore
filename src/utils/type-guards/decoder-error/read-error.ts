import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { unsupportedConstantErrorKinds } from "@/utils/type-guards/decoder-error/unsupported-constant-error";
import { readErrorStackKinds } from "@/utils/type-guards/decoder-error/read-error-stack";
import { readErrorBytesKinds } from "@/utils/type-guards/decoder-error/read-error-bytes";
import { readErrorStorageKinds } from "@/utils/type-guards/decoder-error/read-error-storage";
import { storageNotSuppliedErrorKinds } from "@/utils/type-guards/decoder-error/storage-not-supplied-error";
import { unusedImmutableErrorKinds } from "@/utils/type-guards/decoder-error/unused-immutable-error";
import { codeNotSuppliedErrorKinds } from "@/utils/type-guards/decoder-error/code-not-supplied-error";

export const [isReadError, readErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ReadError>(
    ...unsupportedConstantErrorKinds,
    ...readErrorStackKinds,
    ...readErrorBytesKinds,
    ...readErrorStorageKinds,
    ...storageNotSuppliedErrorKinds,
    ...unusedImmutableErrorKinds,
    ...codeNotSuppliedErrorKinds
  );
