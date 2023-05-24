import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "BoolPaddingError";

export const { BoolPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.BoolPaddingError) => <span>{data.raw}</span>
  )
};
