import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { IntPaddingError } = createCodecComponent(
  "IntPaddingError",
  // TODO
  (data: Format.Errors.IntPaddingError) => <span>{data.raw}</span>
);
