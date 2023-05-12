import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isStorageNotSuppliedError, storageNotSuppliedErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.StorageNotSuppliedError>(
    "StorageNotSuppliedError"
  );
