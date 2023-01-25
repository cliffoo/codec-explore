import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { contractPaddingErrorKinds } from "@/utils/type-guards/decoder-error/contract-padding-error";

export const [isContractError, contractErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.ContractError>(
    ...contractPaddingErrorKinds
  );
