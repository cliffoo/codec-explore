import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isMappingError, mappingErrorKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.MappingError>();
