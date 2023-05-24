import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "FixedPaddingError";

export const { FixedPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.FixedPaddingError) => <span>{data.raw}</span>
  )
};
