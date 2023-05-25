import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { EnumNotFoundDecodingError } = createCodecComponent(
  "EnumNotFoundDecodingError",
  (data: Format.Errors.EnumNotFoundDecodingError) => (
    // TODO
    <span>{data.rawAsBN.toString()}</span>
  )
);
