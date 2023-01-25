import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isFunctionInternalPaddingError } from "@/utils/type-guards/decoder-error/function-internal-padding-error";
import { FunctionInternalPaddingError } from "@/components/Format/Errors/interfaces/function/function-internal-padding-error";
import { isNoSuchInternalFunctionError } from "@/utils/type-guards/decoder-error/no-such-internal-function-error";
import { NoSuchInternalFunctionError } from "@/components/Format/Errors/interfaces/function/no-such-internal-function-error";
import { isDeployedFunctionInConstructorError } from "@/utils/type-guards/decoder-error/deployed-function-in-constructor-error";
import { DeployedFunctionInConstructorError } from "@/components/Format/Errors/interfaces/function/deployed-function-in-constructor-error";
import { MalformedInternalFunctionError } from "@/components/Format/Errors/interfaces/function/malformed-internal-function-error";

export const FunctionInternalError = createPolymorphicComponent(
  (data: Format.Errors.FunctionInternalError) =>
    isFunctionInternalPaddingError(data) ? (
      <FunctionInternalPaddingError data={data} />
    ) : isNoSuchInternalFunctionError(data) ? (
      <NoSuchInternalFunctionError data={data} />
    ) : isDeployedFunctionInConstructorError(data) ? (
      <DeployedFunctionInConstructorError data={data} />
    ) : (
      <MalformedInternalFunctionError data={data} />
    )
);
