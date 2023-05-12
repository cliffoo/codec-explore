import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isOverlongArrayOrStringStrictModeError } from "@/utils/type-guards/decoder-error/overlong-array-or-string-strict-mode-error";
import { OverlongArrayOrStringStrictModeError } from "@/react/components/codec/Codec.Format.Errors/interfaces/internal-use/overlong-array-or-string-strict-mode-error";
import { InternalFunctionInABIError } from "@/react/components/codec/Codec.Format.Errors/interfaces/internal-use/internal-function-in-abi-error";

const displayName = "InternalUseError";

export const { InternalUseError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.InternalUseError) =>
      isOverlongArrayOrStringStrictModeError(data) ? (
        <OverlongArrayOrStringStrictModeError data={data} />
      ) : (
        <InternalFunctionInABIError data={data} />
      )
  )
};
