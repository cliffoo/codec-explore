import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "EnumOutOfRangeError";

export const { EnumOutOfRangeError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumOutOfRangeError) => (
      <span>{data.rawAsBN.toString()}</span>
    )
  )
};
