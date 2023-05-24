import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "OverlongArrayOrStringStrictModeError";

export const { OverlongArrayOrStringStrictModeError } = {
  [displayName]: createCodecComponent(
    displayName,
    (data: Format.Errors.OverlongArrayOrStringStrictModeError) => (
      // TODO
      <span>{data.lengthAsBN.toString()}</span>
    )
  )
};
