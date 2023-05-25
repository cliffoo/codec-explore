import type { Format } from "@truffle/codec";
import { createCodecComponent } from "@/react/utils/create-codec-component";

export const { ContractPaddingError } = createCodecComponent(
  "ContractPaddingError",
  // TODO
  (data: Format.Errors.ContractPaddingError) => <span>{data.raw}</span>
);
