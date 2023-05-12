import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isReadErrorStorage, readErrorStorageKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ReadErrorStorage>(
    "ReadErrorStorage"
  );
