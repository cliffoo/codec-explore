import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "UintPaddingError";

export const { UintPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.UintPaddingError) => <span>{data.raw}</span>
  )
};
