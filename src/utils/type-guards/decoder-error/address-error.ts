import type { Format } from "@truffle/codec";
import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";
import { addressPaddingErrorKinds } from "@/utils/type-guards/decoder-error/address-padding-error";

export const [isAddressError, addressErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.AddressError>(
    ...addressPaddingErrorKinds
  );
