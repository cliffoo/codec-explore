import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "EnumPaddingError";

export const { EnumPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumPaddingError) => <span>{data.raw}</span>
  )
};
