import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { InternalFunctionInABIError } = createCodecComponent(
  "InternalFunctionInABIError",
  // TODO
  (data: Format.Errors.InternalFunctionInABIError) => <span>{data.kind}</span>
);
