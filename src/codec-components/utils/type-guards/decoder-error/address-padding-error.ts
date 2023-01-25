import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isAddressPaddingError, addressPaddingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.AddressPaddingError>(
    "AddressPaddingError"
  );
