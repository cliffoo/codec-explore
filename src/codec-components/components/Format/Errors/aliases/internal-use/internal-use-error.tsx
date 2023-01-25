import { createPolymorphicComponent } from "@/utils/create-polymorphic-component";
import { isOverlongArrayOrStringStrictModeError } from "@/utils/type-guards/decoder-error/overlong-array-or-string-strict-mode-error";
import { OverlongArrayOrStringStrictModeError } from "@/components/Format/Errors/interfaces/internal-use/overlong-array-or-string-strict-mode-error";
import { InternalFunctionInABIError } from "@/components/Format/Errors/interfaces/internal-use/internal-function-in-abi-error";

export const InternalUseError = createPolymorphicComponent(
  (data: Format.Errors.InternalUseError) =>
    isOverlongArrayOrStringStrictModeError(data) ? (
      <OverlongArrayOrStringStrictModeError data={data} />
    ) : (
      <InternalFunctionInABIError data={data} />
    )
);
