import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";
import { isBoolOutOfRangeError } from "@/utils/type-guards/decoder-error/bool-out-of-range-error";
import { BoolOutOfRangeError } from "@/react/components/codec/Format.Errors/interfaces/elementary/bool-out-of-range-error";
import { BoolPaddingError } from "@/react/components/codec/Format.Errors/interfaces/elementary/bool-padding-error";

export const { BoolError } = createCodecComponent(
  "BoolError",
  (data: Format.Errors.BoolError) =>
    isBoolOutOfRangeError(data) ? (
      <BoolOutOfRangeError data={data} />
    ) : (
      <BoolPaddingError data={data} />
    )
);
