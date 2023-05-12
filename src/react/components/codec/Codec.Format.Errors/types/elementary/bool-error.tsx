import type { Format } from "@truffle/codec";
import { createPolymorphicComponent } from "@/react/utils/create-polymorphic-component";
import { isBoolOutOfRangeError } from "@/utils/type-guards/decoder-error/bool-out-of-range-error";
import { BoolOutOfRangeError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bool-out-of-range-error";
import { BoolPaddingError } from "@/react/components/codec/Codec.Format.Errors/interfaces/elementary/bool-padding-error";

const displayName = "BoolError";

export const { BoolError } = {
  [displayName]: createPolymorphicComponent(
    displayName,
    (data: Format.Errors.BoolError) =>
      isBoolOutOfRangeError(data) ? (
        <BoolOutOfRangeError data={data} />
      ) : (
        <BoolPaddingError data={data} />
      )
  )
};
