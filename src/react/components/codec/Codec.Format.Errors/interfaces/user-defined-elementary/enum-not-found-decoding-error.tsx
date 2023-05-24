import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

const displayName = "EnumNotFoundDecodingError";

export const { EnumNotFoundDecodingError } = {
  [displayName]: createCodecComponent(
    displayName,
    // TODO
    (data: Format.Errors.EnumNotFoundDecodingError) => (
      <span>{data.rawAsBN.toString()}</span>
    )
  )
};
