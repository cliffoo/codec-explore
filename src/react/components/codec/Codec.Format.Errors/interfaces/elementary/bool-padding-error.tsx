import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { BoolPaddingError } = createCodecComponent(
  "BoolPaddingError",
  // TODO
  (data: Format.Errors.BoolPaddingError) => <span>{data.raw}</span>
);
