import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { FunctionInternalPaddingError } = createCodecComponent(
  "FunctionInternalPaddingError",
  // TODO
  (data: Format.Errors.FunctionInternalPaddingError) => <span>{data.raw}</span>
);
