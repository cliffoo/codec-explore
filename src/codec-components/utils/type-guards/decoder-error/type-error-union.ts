import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [isTypeErrorUnion, typeErrorUnionKinds] =
  decoderErrorTypeGuardHelper<Format.Errors.TypeErrorUnion>();
