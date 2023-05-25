import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { UintPaddingError } = createCodecComponent(
  "UintPaddingError",
  // TODO
  (data: Format.Errors.UintPaddingError) => <span>{data.raw}</span>
);
