import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isUserDefinedTypeNotFoundError,
  userDefinedTypeNotFoundErrorKinds
] = decoderErrorTypeGuardHelper<Format.Errors.UserDefinedTypeNotFoundError>(
  "UserDefinedTypeNotFoundError"
);
