import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { BoolOutOfRangeError } = createCodecComponent(
  "BoolOutOfRangeError",
  (data: Format.Errors.BoolOutOfRangeError) => (
    // TODO
    <span>{data.rawAsBN.toString()}</span>
  )
);
