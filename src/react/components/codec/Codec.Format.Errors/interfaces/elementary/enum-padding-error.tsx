import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { EnumPaddingError } = createCodecComponent(
  "EnumPaddingError",
  // TODO
  (data: Format.Errors.EnumPaddingError) => <span>{data.raw}</span>
);
