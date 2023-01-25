import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { fixedPaddingErrorKinds } from "@/utils/type-guards/decoder-error/fixed-padding-error";

export const [isFixedError, fixedErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.FixedError>(
    ...fixedPaddingErrorKinds
  );
