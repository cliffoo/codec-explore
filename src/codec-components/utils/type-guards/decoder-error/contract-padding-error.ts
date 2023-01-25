import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isContractPaddingError, contractPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ContractPaddingError>(
    "ContractPaddingError"
  );
