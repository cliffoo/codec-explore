import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { OverlongArrayOrStringStrictModeError } = createCodecComponent(
  "OverlongArrayOrStringStrictModeError",
  (data: Format.Errors.OverlongArrayOrStringStrictModeError) => (
    // TODO
    <span>{data.lengthAsBN.toString()}</span>
  )
);
