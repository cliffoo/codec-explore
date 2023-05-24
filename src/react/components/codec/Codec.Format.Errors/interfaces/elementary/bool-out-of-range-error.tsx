import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "BoolOutOfRangeError";

export const { BoolOutOfRangeError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolOutOfRangeError) => (
      <span>{data.rawAsBN.toString()}</span>
    )
  )
};
