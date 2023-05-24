import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "UfixedPaddingError";

export const { UfixedPaddingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.UfixedPaddingError) => <span>{data.raw}</span>
  )
};
