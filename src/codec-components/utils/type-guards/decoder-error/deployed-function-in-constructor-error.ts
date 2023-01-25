import { decoderErrorTypeGuardHelper } from "@/utils/type-guards/decoder-error/helper";

export const [
  isDeployedFunctionInConstructorError,
  deployedFunctionInConstructorErrorKinds
] =
  decoderErrorTypeGuardHelper<Format.Errors.DeployedFunctionInConstructorError>(
    "DeployedFunctionInConstructorError"
  );
