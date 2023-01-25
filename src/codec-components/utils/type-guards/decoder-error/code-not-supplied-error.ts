import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isCodeNotSuppliedError, codeNotSuppliedErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.CodeNotSuppliedError>(
    "CodeNotSuppliedError"
  );
